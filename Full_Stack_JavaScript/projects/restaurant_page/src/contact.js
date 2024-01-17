function createContact(){
    const container = document.getElementById("container");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    container.appendChild(contactContainer);

        const mapImg = document.createElement("img");
        mapImg.src = '../dist/images/contact_map.png';
        mapImg.alt = 'Google Maps Image of Artemis Bakery Location';
        contactContainer.appendChild(mapImg);

        const addressContainer = document.createElement("div");
        addressContainer.classList.add("addressContainer");
        contactContainer.appendChild(addressContainer);
            const addressIcon = document.createElement("img");
            addressIcon.src = '../dist/images/pin-icon.svg';
            addressIcon.alt = 'SVG image of a map pin';
            addressContainer.appendChild(addressIcon);
            const addressText = document.createElement("p")
            addressText.innerText="123 Howitt Street, North Ward, QLD, 4810";
            addressContainer.appendChild(addressText);

        const phoneContainer = document.createElement("div");
        phoneContainer.classList.add("phoneContainer");
        contactContainer.appendChild(phoneContainer);
            const phoneIcon = document.createElement("img");
            phoneIcon.src = '../dist/images/phone-icon.svg';
            phoneIcon.alt = 'SVG image of a phone';
            phoneContainer.appendChild(phoneIcon);
            const phoneText = document.createElement("p")
            phoneText.innerText="+123 456 789";
            phoneContainer.appendChild(phoneText);

        const emailContainer = document.createElement("div");
        emailContainer.classList.add("emailContainer");
        contactContainer.appendChild(emailContainer);
            const emailIcon = document.createElement("img");
            emailIcon.src = '../dist/images/email-icon.svg';
            emailIcon.alt = 'SVG image of a email';
            emailContainer.appendChild(emailIcon);
            const emailText = document.createElement("p")
            emailText.innerText="artemis.bakery@fakeemail.com";
            emailContainer.appendChild(emailText);

}

export { createContact };