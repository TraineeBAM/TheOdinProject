function createHome(){
    const container = document.getElementById("container");

    const intro = document.createElement("div")
    intro.classList.add("intro")
    container.appendChild(intro)

    const para1 = document.createElement("p")
    para1.innerText="Step into the enchanting world of Artemis Bakery, where the aroma of freshly baked delights welcomes you to a haven of heavenly flavors and artisanal craftsmanship. Nestled in the heart of Townsville, Artemis is not just a bakery; it's a celebration of the artistry of baking and the joy it brings to every bite."
    const para2 = document.createElement("p")
    para2.innerText="At Artemis Bakery, we believe in the magic that happens when the finest ingredients come together in perfect harmony. From our oven to your plate, each pastry, cake, and bread is a testament to our commitment to quality and a symphony of flavors that dance on your palate. Our skilled bakers infuse passion into every creation, ensuring that each delicacy is a moment of sheer indulgence."
    const para3 = document.createElement("p")
    para3.innerText="Indulge in the extraordinary at Artemis Bakery - where passion meets pastry and every moment is a delicious revelation."

    intro.appendChild(para1);
    intro.appendChild(para2);
    intro.appendChild(para3);
}

export { createHome };