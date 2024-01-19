const newToDo = document.getElementById('newToDo');
newToDo.addEventListener('click', (e) =>
document.getElementById('formOverlay').style.display = 'flex')

const closeForm = document.getElementById('cancelFormBtn')
closeForm.addEventListener('click', (e) =>{
    document.getElementById('formOverlay').style.display = 'none';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
})


const submitForm = document.getElementById('submitFormBtn')
submitForm.addEventListener('click', (e) => {
    const title = document.getElementById('title').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    // Ensure form contains info
    if (title.trim() === '' || priority.trim() === '' || dueDate.trim() === '') {
        alert('Please fill in all required fields (Title, Priority, Due Date).');
        return;
    }
    const toDoItem = createToDoItem(title, priority, description, dueDate);
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
    const 

    
    
    // Clear the form
    document.getElementById('formOverlay').style.display = 'none';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
})

function createToDoItem(title, priority, description, dueDate){
    return {
        title : title,
        priority : priority,
        description : description,
        dueDate : dueDate,
    }
}

export { createToDoItem };