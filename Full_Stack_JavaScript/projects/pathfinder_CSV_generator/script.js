const csvScript = {
    data: [],
    init(){
        csvScript.addListeners();
    },

    addListeners(){
        const form = document.querySelector('#roles-form');
        form.addEventListener('submit', csvScript.formValidation);

        document
            .getElementById('btnExport')
            .addEventListener('click', csvScript.exportCSV);

        document
            .querySelector('table tbody')
            .addEventListener('dblclick', csvScript.editCell);

        document
            .getElementById('btnReset')
            .addEventListener('click', (ev) => {
                let form = document.querySelector('form')    
                ev.preventDefault();
                    form.reset();
                    document.getElementById('name').focus();
                })

    },

    formValidation(ev){
        ev.preventDefault();
        // We call saveData after we validate the input
    },

    saveData(ev){
        ev.preventDefault();
        const form = ev.target;
        const formdata = new FormData(form);
        csvScript.cacheData(formdata);
        csvScript.newRow(formdata);
        document.getElementById('name').focus();
    },

    cacheData(formdata){
        csvScript.data.push(Array.from(formdata.values()));
    },

    newRow(formdata) {
        const tbody = document.querySelector('tbody');
        const tr = document.createElement('tr');
        tr.setAttribute('data-row', document.querySelectorAll('tbody tr').length);
        let col = 0;
        
        function generateUniqueID() {
            const collectionInput = document.getElementById('collectionInput').value.replace(/\s+/g, '_');
            const nameInput = document.getElementById('name').value.replace(/\s+/g, '_');
            const classificationInput = document.getElementById('classification').value.replace(/\s+/g, '_');
            return `${collectionInput}_${nameInput}_${classificationInput}`;
        }
    
        tr.innerHTML += `<td data-col="${col}" data-name="id">${generateUniqueID()}</td>`;
        col++;

        for (let entry of formdata.entries()) {
            let columnName = entry[0];
            let cellValue = entry[1];
    
            if (col === 0) {
                columnName = "id";
                cellValue = generateUniqueID();
            }
            
            tr.innerHTML += `<td data-col="${col}" data-name="${columnName}">${cellValue}</td>`;
            col++;
        }
    
        tbody.append(tr);
    },

    exportCSV() {
        // Assuming csvScript.data is a global variable
        csvScript.data = [];
    
        // Add header row
        csvScript.data.push(['id', 'name', 'job_family', 'job_family_function', 'job_family_role', 'aps_job_code', 'profile_link', 'demand', 'interests', 'learning_link', 'discipline', 'alias', 'description', 'classification', 'knowledge', 'influence', 'experience', 'critical_skills', 'desirable_skills', 'knowledge']);
    
        // Add data rows
        const tbodyRows = document.querySelectorAll('tbody tr');
        tbodyRows.forEach(row => {
            const rowData = [];
            const cells = row.querySelectorAll('td');
            cells.forEach(cell => {
                rowData.push(cell.textContent);
            });
            csvScript.data.push(rowData);
        });
    
        let str = '';
        csvScript.data.forEach((row) => {
            str += row.map((col) => JSON.stringify(col)).join(',').concat('\n');
        });
    
        let filename = `pathfinderCSVexport.${Date.now()}.csv`;
        let file = new File([str], filename, { type: 'text/csv' });
    
        let a = document.createElement('a');
        a.href = URL.createObjectURL(file);
        a.download = filename;
        a.click();
    },

    editCell(e){

    },
}

document.addEventListener('DOMContentLoaded', csvScript.init);