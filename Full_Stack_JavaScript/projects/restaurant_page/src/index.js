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
        container.innerText = "";
        createSkeleton();
        createMenu();
    } else if (target.classList.contains('navContact')) {
        container.innerText = "";
        createSkeleton();
        createContact();
    } else if (target.classList.contains('navHome')) {
        container.innerText = "";
        createSkeleton();
        createHome();
    }
});