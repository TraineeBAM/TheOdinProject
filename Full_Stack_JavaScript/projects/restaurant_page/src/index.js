import { createSkeleton } from './website';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

createSkeleton();
createHome();

function clearContent(){
    const contactContainer = document.getElementsByClassName("contactContainer")[0];
    const intro = document.getElementsByClassName("intro")[0];
    const contentCards = document.getElementsByClassName("contentCards")[0];
    contactContainer.innerText = "";
    intro.innerText = "";
    contentCards.innerText = "";
}

const menuButton = document.getElementsByClassName("navMenu")[0];
menuButton.addEventListener('click', () => {
    clearContent()
    createSkeleton()
    createMenu()
})

const contactButton = document.getElementsByClassName("navContact")[0];
contactButton.addEventListener('click', () => {
    clearContent()
    createSkeleton()
    createContact()
})

const homeButton = document.getElementsByClassName("navHome")[0];
homeButton.addEventListener('click', () => {
    clearContent()
    createSkeleton()
    createHome()
})