function createMenu(){
    const container = document.getElementById("container");

    const contentCards = document.createElement("div");
    contentCards.classList.add("contentCards");
    container.appendChild(contentCards);

        const menuItem1 = document.createElement("div");
        menuItem1.classList.add("menuItem1");
        contentCards.appendChild(menuItem1);
            const menuItem1Image = document.createElement("img");
            menuItem1Image.src = '../dist/images/nutella_croissant.jpg';
            menuItem1Image.alt = 'Heavenly Nutella Croissant';
            const menuItem1Text = document.createElement("div");
            menuItem1Text.classList.add("menuItem1Text");
            const menuItem1Name = document.createElement("h1");
            menuItem1Name.innerText="Heavenly Nutella Croissant";
            const menuItem1About = document.createElement("p");
            menuItem1About.innerText=" Indulge in layers of flaky goodness with our Heavenly Nutella Croissant. This delectable treat features a generous spread of creamy Nutella, creating a perfect harmony of buttery pastry and rich chocolate-hazelnut flavor."
            const menuItem1Price = document.createElement("p");
            menuItem1Price.innerText="$3.99 ea";
            menuItem1.appendChild(menuItem1Image);
            menuItem1.appendChild(menuItem1Text);
            menuItem1Text.appendChild(menuItem1Name);
            menuItem1Text.appendChild(menuItem1About);
            menuItem1Text.appendChild(menuItem1Price);

        const menuItem2 = document.createElement("div");
        menuItem2.classList.add("menuItem2");
        contentCards.appendChild(menuItem2);
            const menuItem2Image = document.createElement("img");
            menuItem2Image.src = '../dist/images/blueberry_scone.jpg';
            menuItem2Image.alt = 'Blueberry Bliss Scone';
            const menuItem2Text = document.createElement("div");
            menuItem2Text.classList.add("menuItem2Text");
            const menuItem2Name = document.createElement("h1");
            menuItem2Name.innerText="Blueberry Bliss Scone";
            const menuItem2About = document.createElement("p");
            menuItem2About.innerText="Experience the blissful taste of summer with our Blueberry Bliss Scone. Packed with plump, juicy blueberries and a hint of citrus zest, this tender scone is a delightful companion to your morning coffee or afternoon tea."
            const menuItem2Price = document.createElement("p");
            menuItem2Price.innerText="$2.49 ea";
            menuItem2.appendChild(menuItem2Image);
            menuItem2.appendChild(menuItem2Text);
            menuItem2Text.appendChild(menuItem2Name);
            menuItem2Text.appendChild(menuItem2About);
            menuItem2Text.appendChild(menuItem2Price);

        const menuItem3 = document.createElement("div");
        menuItem3.classList.add("menuItem3");
        contentCards.appendChild(menuItem3);
            const menuItem3Image = document.createElement("img");
            menuItem3Image.src = '../dist/images/caramel_pecan.jpg';
            menuItem3Image.alt = 'Caramel Pecan Dream Cake';
            const menuItem3Text = document.createElement("div");
            menuItem3Text.classList.add("menuItem3Text");
            const menuItem3Name = document.createElement("h1");
            menuItem3Name.innerText="Caramel Pecan Dream Cake";
            const menuItem3About = document.createElement("p");
            menuItem3About.innerText="Elevate your dessert experience with our Caramel Pecan Dream Cake. Layers of moist vanilla cake are adorned with luscious caramel frosting and crunchy pecans, creating a dreamy symphony of flavors and textures."
            const menuItem3Price = document.createElement("p");
            menuItem3Price.innerText="$4.99 (slice)";
            menuItem3.appendChild(menuItem3Image);
            menuItem3.appendChild(menuItem3Text);
            menuItem3Text.appendChild(menuItem3Name);
            menuItem3Text.appendChild(menuItem3About);
            menuItem3Text.appendChild(menuItem3Price);

        const menuItem4 = document.createElement("div");
        menuItem4.classList.add("menuItem4");
        contentCards.appendChild(menuItem4);
            const menuItem4Image = document.createElement("img");
            menuItem4Image.src = '../dist/images/raspberry_macaron.jpg';
            menuItem4Image.alt = 'Raspberry Rose Macaron';
            const menuItem4Text = document.createElement("div");
            menuItem4Text.classList.add("menuItem4Text");
            const menuItem4Name = document.createElement("h1");
            menuItem4Name.innerText="Raspberry Rose Macaron";
            const menuItem4About = document.createElement("p");
            menuItem4About.innerText="Delicate and divine, our Raspberry Rose Macaron is a floral delight. Two almond meringue shells embrace a velvety raspberry rose ganache, offering a sophisticated blend of fruity and floral notes."
            const menuItem4Price = document.createElement("p");
            menuItem4Price.innerText="$1.99 ea";
            menuItem4.appendChild(menuItem4Image);
            menuItem4.appendChild(menuItem4Text);
            menuItem4Text.appendChild(menuItem4Name);
            menuItem4Text.appendChild(menuItem4About);
            menuItem4Text.appendChild(menuItem4Price);

        const menuItem5 = document.createElement("div");
        menuItem5.classList.add("menuItem5");
        contentCards.appendChild(menuItem5);
            const menuItem5Image = document.createElement("img");
            menuItem5Image.src = '../dist/images/chai_spice_muffin.jpg';
            menuItem5Image.alt = 'Chai Spice Latte Muffin';
            const menuItem5Text = document.createElement("div");
            menuItem5Text.classList.add("menuItem5Text");
            const menuItem5Name = document.createElement("h1");
            menuItem5Name.innerText="Chai Spice Latte Muffin";
            const menuItem5About = document.createElement("p");
            menuItem5About.innerText="Warm your senses with our Chai Spice Latte Muffin. This spiced delight is infused with aromatic chai tea, cinnamon, and a touch of vanilla, creating a cozy and comforting flavor experience."
            const menuItem5Price = document.createElement("p");
            menuItem5Price.innerText="$2.99 ea";
            menuItem5.appendChild(menuItem5Image);
            menuItem5.appendChild(menuItem5Text);
            menuItem5Text.appendChild(menuItem5Name);
            menuItem5Text.appendChild(menuItem5About);
            menuItem5Text.appendChild(menuItem5Price);

        const menuItem6 = document.createElement("div");
        menuItem6.classList.add("menuItem6");
        contentCards.appendChild(menuItem6);
            const menuItem6Image = document.createElement("img");
            menuItem6Image.src = '../dist/images/lemon_lavender_shortbread.jpg';
            menuItem6Image.alt = 'Lemon Lavender Shortbread';
            const menuItem6Text = document.createElement("div");
            menuItem6Text.classList.add("menuItem6Text");
            const menuItem6Name = document.createElement("h1");
            menuItem6Name.innerText="Lemon Lavender Shortbread";
            const menuItem6About = document.createElement("p");
            menuItem6About.innerText="Transport yourself to a fragrant garden with our Lemon Lavender Shortbread. These delicate, buttery shortbread cookies are infused with the bright zest of lemons and the subtle floral essence of lavender."
            const menuItem6Price = document.createElement("p");
            menuItem6Price.innerText="$3.99 (6)";
            menuItem6.appendChild(menuItem6Image);
            menuItem6.appendChild(menuItem6Text);
            menuItem6Text.appendChild(menuItem6Name);
            menuItem6Text.appendChild(menuItem6About);
            menuItem6Text.appendChild(menuItem6Price);
}

export { createMenu };