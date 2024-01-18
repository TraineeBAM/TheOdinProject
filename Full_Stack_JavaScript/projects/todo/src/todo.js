function createToDoItem(title, description, dueDate, priority, project){
    return {
        title : title,
        description : description,
        dueDate : dueDate,
        priority : priority,
        project : project
    }
}

export { createToDoItem };