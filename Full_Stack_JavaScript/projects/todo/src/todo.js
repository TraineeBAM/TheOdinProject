const newToDo = document.getElementById('newToDo');
newToDo.addEventListener('click', (e) =>
document.getElementById('formOverlay').style.display = 'flex')

const closeForm = document.getElementById('cancelFormBtn')
closeForm.addEventListener('click', (e) =>{
    document.getElementById('formOverlay').style.display = 'none';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('project').value = '';
})


const submitForm = document.getElementById('submitFormBtn')
submitForm.addEventListener('click', (e) => {
    const title = document.getElementById('title').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const project = document.getElementById('project').value;
    // Ensure form contains info
    if (title.trim() === '' || priority.trim() === '' || dueDate.trim() === '' || project.trim() === '') {
        alert('Please fill in all required fields (Title, Project, Description, Due Date).');
        return;
    }

    const toDoItem = createToDoItem(title, priority, project, description, dueDate);
    console.log(toDoItem)

    //Creating the content card
    const contentCardContainer = document.getElementById('contentCardContainer');
    const contentCard = document.createElement('div');
    contentCard.classList.add('contentCard')
    contentCardContainer.appendChild(contentCard);
    //creating the content card information
    //title
    const toDoTitle = document.createElement('div');
    toDoTitle.classList.add('toDoTitle');
    toDoTitle.innerText = title;
    contentCard.appendChild(toDoTitle);
    //priority
    const toDoPriority = document.createElement('div');
    toDoPriority.classList.add('toDoPriority');
    toDoPriority.innerText = priority;
    contentCard.appendChild(toDoPriority);
    //project
    const toDoProject = document.createElement('div');
    toDoProject.classList.add('toDoProject');
    toDoProject.innerText = project;
    contentCard.appendChild(toDoProject);
    //description
    const toDoText = document.createElement('div');
    toDoText.classList.add('toDoText');
    toDoText.innerText = description;
    contentCard.appendChild(toDoText);
    //due date
    const toDoDue = document.createElement('div');
    toDoDue.classList.add('toDoDue');
    toDoDue.innerText = dueDate;
    contentCard.appendChild(toDoDue);
    //delete button
    const svgNamespace = 'http://www.w3.org/2000/svg';
    const toDoDeleteButton = document.createElement('div');
    toDoDeleteButton.classList.add('toDoDeleteButton');
    contentCard.appendChild(toDoDeleteButton);
    const toDoDeleteButtonSVG = document.createElementNS(svgNamespace, 'svg');
    toDoDeleteButtonSVG.setAttribute('width', '24');
    toDoDeleteButtonSVG.setAttribute('height', '24');
    toDoDeleteButtonSVG.setAttribute('viewBox', '0 0 24 24');
    toDoDeleteButtonSVG.setAttribute('fill', 'none');
    toDoDeleteButtonSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const path = document.createElementNS(svgNamespace, 'path');
    path.setAttribute('d', 'M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z');
    path.setAttribute('stroke', '#000000');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    toDoDeleteButtonSVG.appendChild(path);
    toDoDeleteButton.appendChild(toDoDeleteButtonSVG);

    toDoDeleteButtonSVG.addEventListener('click', (e) => {
        contentCard.remove();
    })
    // Assign to relevant list
    if (toDoProject.innerText === 'test'){
        contentCard.style.display = 'none';
    }
    
    // Clear the form
    document.getElementById('formOverlay').style.display = 'none';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('project').value = '';
})

function createToDoItem(title, priority, description, dueDate){
    return {
        title : title,
        priority : priority,
        description : description,
        dueDate : dueDate,
    }
}