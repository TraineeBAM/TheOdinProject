import { createToDoItem } from "./todo";
import { format, compareAsc } from "date-fns"

let toDo1 = createToDoItem('Service Car', 'Change oil and filter, check brakes', '30th Jan 2024', 'medium', 'Home tasks')

format(new Date(2014, 1, 11), "MM/dd/yyyy");
console.log(Date);

console.log(toDo1);