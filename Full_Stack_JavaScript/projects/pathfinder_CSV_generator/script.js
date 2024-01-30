const csvScript = {
    data: [],
    init(){
        csvScript.addListeners();
    },

    addListeners(){
        const form = document.querySelector('form');
        form.addEventListener('submit', csvScript.formValidation);

        document
            .getElementById('btnExport')
            .addEventListener('click', csvScript.exportCSV);

        document
            .getElementById('btnReset')
            .addEventListener('click', (ev) => {  
                ev.preventDefault();
                    form.reset();
                    document.getElementById('name').focus();
                })

    },

    formValidation(ev){
        ev.preventDefault();
        // Get required fields
        const form = document.querySelector('form');
        let collectionInput = document.getElementById('collectionInput');
        let name = document.getElementById('name');
        let jobCode = document.getElementById('aps_job_code')
        let profileLink = document.getElementById('profile_link')
        let learningLink = document.getElementById('learning_link')
        let description = document.getElementById('description');
        let criticalSkills = document.getElementById('critical_skills');
        // Implement data validation for required fields
        if (!collectionInput.value.trim()) {
            collectionInput.setCustomValidity('A collection is required for all roles');
            collectionInput.reportValidity();
            return;
        } else if (/[^a-zA-Z0-9\s_]/.test(collectionInput.value)) {
            collectionInput.setCustomValidity('Only letters, numbers, spaces, and underscores are permitted');
            collectionInput.reportValidity();
            return;
        } else if(
            !name.value.trim()){
            name.setCustomValidity('A name is required for all roles');
            name.reportValidity();
            return;
        } else if(/[,]/.test(name.value)){
            name.setCustomValidity('Name cannot contain a comma');
            name.reportValidity();
            return;
        } else if (jobCode.value && !/^\d{6}$/.test(jobCode.value)) {
            jobCode.setCustomValidity('6 numeric digits expected (include leading zeroes)');
            jobCode.reportValidity();
            return;
        } else if (!description.value.trim()){
            description.setCustomValidity('A brief description of each role is required');
            description.reportValidity();
            return;
        } else if (profileLink.validity.typeMismatch){
            profileLink.setCustomValidity('Please enter a standard URL');
            profileLink.reportValidity();
            return
        } else if (learningLink.validity.typeMismatch){
            learningLink.setCustomValidity('Please enter a standard URL');
            learningLink.reportValidity();
            return
        } else if (!criticalSkills.value.trim()){
            criticalSkills.setCustomValidity('Please enter at least one critical skill from a supporting framework');
            criticalSkills.reportValidity();
            return
        }
    
        // Clear custom validity if validation passes
        // collectionInput.setCustomValidity("");
        // name.setCustomValidity("");
        
        // Continue with data saving if validation passes
        csvScript.saveData();
    },

    saveData(){
        const form = document.querySelector('form');
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

}

document.addEventListener('DOMContentLoaded', csvScript.init);