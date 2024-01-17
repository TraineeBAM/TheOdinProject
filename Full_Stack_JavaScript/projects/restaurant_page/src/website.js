function createSkeleton() {
    const container = document.getElementById("container");
    
    const header = document.createElement("div");
    header.classList.add("header");
    container.appendChild(header);
        const siteName = document.createElement("h1");
        siteName.textContent="Artemis Bakery"
        header.appendChild(siteName)

    const navigation = document.createElement("div")
    navigation.classList.add("navigation");
    container.appendChild(navigation);
        const navMenu = document.createElement("div")
        navMenu.classList.add("navMenu")
        navMenu.textContent="Menu"
        navigation.appendChild(navMenu)
        const navHome = document.createElement("div")
        navHome.classList.add("navHome")
        navHome.textContent="Home"
        navigation.appendChild(navHome)
        const navContact = document.createElement("div")
        navContact.classList.add("navContact")
        navContact.textContent="Contact"
        navigation.appendChild(navContact)

    const footer = document.createElement("div");
    footer.id = "footer";
    container.appendChild(footer);
        const footerText = document.createElement("p");
        footerText.innerText = "Photo by Mae Mu on Unsplash";
        footer.appendChild(footerText);
}

export { createSkeleton };