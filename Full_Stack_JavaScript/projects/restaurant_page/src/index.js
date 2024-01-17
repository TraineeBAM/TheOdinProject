import { createSkeleton } from './website';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

createSkeleton();
createHome();

const container = document.getElementById("container");

container.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('navMenu')) {
        console.log("Menu works");
        container.innerText = "";
        createSkeleton();
        createMenu();
    } else if (target.classList.contains('navContact')) {
        console.log("Contact works");
        container.innerText = "";
        createSkeleton();
        createContact();
    } else if (target.classList.contains('navHome')) {
        console.log("Home works");
        container.innerText = "";
        createSkeleton();
        createHome();
    }
});