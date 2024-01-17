(()=>{"use strict";function e(){const e=document.getElementById("container"),t=document.createElement("div");t.classList.add("header"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Artemis Bakery",t.appendChild(n);const a=document.createElement("div");a.classList.add("navigation"),e.appendChild(a);const d=document.createElement("div");d.classList.add("navMenu"),d.textContent="Menu",a.appendChild(d);const c=document.createElement("div");c.classList.add("navHome"),c.textContent="Home",a.appendChild(c);const i=document.createElement("div");i.classList.add("navContact"),i.textContent="Contact",a.appendChild(i);const o=document.createElement("div");o.id="footer",e.appendChild(o);const s=document.createElement("p");s.innerText="Photo by Mae Mu on Unsplash",o.appendChild(s)}function t(){const e=document.getElementById("container"),t=document.createElement("div");t.classList.add("intro"),e.appendChild(t);const n=document.createElement("p");n.innerText="Step into the enchanting world of Artemis Bakery, where the aroma of freshly baked delights welcomes you to a haven of heavenly flavors and artisanal craftsmanship. Nestled in the heart of Townsville, Artemis is not just a bakery; it's a celebration of the artistry of baking and the joy it brings to every bite.";const a=document.createElement("p");a.innerText="At Artemis Bakery, we believe in the magic that happens when the finest ingredients come together in perfect harmony. From our oven to your plate, each pastry, cake, and bread is a testament to our commitment to quality and a symphony of flavors that dance on your palate. Our skilled bakers infuse passion into every creation, ensuring that each delicacy is a moment of sheer indulgence.";const d=document.createElement("p");d.innerText="Indulge in the extraordinary at Artemis Bakery - where passion meets pastry and every moment is a delicious revelation.",t.appendChild(n),t.appendChild(a),t.appendChild(d)}e(),t();const n=document.getElementById("container");n.addEventListener("click",(a=>{const d=a.target;d.classList.contains("navMenu")?(console.log("Menu works"),n.innerText="",e(),function(){const e=document.getElementById("container"),t=document.createElement("div");t.classList.add("contentCards"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menuItem1"),t.appendChild(n);const a=document.createElement("img");a.src="../dist/images/nutella_croissant.jpg",a.alt="Heavenly Nutella Croissant";const d=document.createElement("div");d.classList.add("menuItem1Text");const c=document.createElement("h1");c.innerText="Heavenly Nutella Croissant";const i=document.createElement("p");i.innerText=" Indulge in layers of flaky goodness with our Heavenly Nutella Croissant. This delectable treat features a generous spread of creamy Nutella, creating a perfect harmony of buttery pastry and rich chocolate-hazelnut flavor.";const o=document.createElement("p");o.innerText="$3.99 ea",n.appendChild(a),n.appendChild(d),d.appendChild(c),d.appendChild(i),d.appendChild(o);const s=document.createElement("div");s.classList.add("menuItem2"),t.appendChild(s);const r=document.createElement("img");r.src="../dist/images/blueberry_scone.jpg",r.alt="Blueberry Bliss Scone";const l=document.createElement("div");l.classList.add("menuItem2Text");const m=document.createElement("h1");m.innerText="Blueberry Bliss Scone";const p=document.createElement("p");p.innerText="Experience the blissful taste of summer with our Blueberry Bliss Scone. Packed with plump, juicy blueberries and a hint of citrus zest, this tender scone is a delightful companion to your morning coffee or afternoon tea.";const u=document.createElement("p");u.innerText="$2.49 ea",s.appendChild(r),s.appendChild(l),l.appendChild(m),l.appendChild(p),l.appendChild(u);const h=document.createElement("div");h.classList.add("menuItem3"),t.appendChild(h);const C=document.createElement("img");C.src="../dist/images/caramel_pecan.jpg",C.alt="Caramel Pecan Dream Cake";const g=document.createElement("div");g.classList.add("menuItem3Text");const E=document.createElement("h1");E.innerText="Caramel Pecan Dream Cake";const f=document.createElement("p");f.innerText="Elevate your dessert experience with our Caramel Pecan Dream Cake. Layers of moist vanilla cake are adorned with luscious caramel frosting and crunchy pecans, creating a dreamy symphony of flavors and textures.";const v=document.createElement("p");v.innerText="$4.99 (slice)",h.appendChild(C),h.appendChild(g),g.appendChild(E),g.appendChild(f),g.appendChild(v);const y=document.createElement("div");y.classList.add("menuItem4"),t.appendChild(y);const x=document.createElement("img");x.src="../dist/images/raspberry_macaron.jpg",x.alt="Raspberry Rose Macaron";const T=document.createElement("div");T.classList.add("menuItem4Text");const L=document.createElement("h1");L.innerText="Raspberry Rose Macaron";const b=document.createElement("p");b.innerText="Delicate and divine, our Raspberry Rose Macaron is a floral delight. Two almond meringue shells embrace a velvety raspberry rose ganache, offering a sophisticated blend of fruity and floral notes.";const k=document.createElement("p");k.innerText="$1.99 ea",y.appendChild(x),y.appendChild(T),T.appendChild(L),T.appendChild(b),T.appendChild(k);const w=document.createElement("div");w.classList.add("menuItem5"),t.appendChild(w);const I=document.createElement("img");I.src="../dist/images/chai_spice_muffin.jpg",I.alt="Chai Spice Latte Muffin";const B=document.createElement("div");B.classList.add("menuItem5Text");const S=document.createElement("h1");S.innerText="Chai Spice Latte Muffin";const M=document.createElement("p");M.innerText="Warm your senses with our Chai Spice Latte Muffin. This spiced delight is infused with aromatic chai tea, cinnamon, and a touch of vanilla, creating a cozy and comforting flavor experience.";const j=document.createElement("p");j.innerText="$2.99 ea",w.appendChild(I),w.appendChild(B),B.appendChild(S),B.appendChild(M),B.appendChild(j);const _=document.createElement("div");_.classList.add("menuItem6"),t.appendChild(_);const H=document.createElement("img");H.src="../dist/images/lemon_lavender_shortbread.jpg",H.alt="Lemon Lavender Shortbread";const A=document.createElement("div");A.classList.add("menuItem6Text");const N=document.createElement("h1");N.innerText="Lemon Lavender Shortbread";const R=document.createElement("p");R.innerText="Transport yourself to a fragrant garden with our Lemon Lavender Shortbread. These delicate, buttery shortbread cookies are infused with the bright zest of lemons and the subtle floral essence of lavender.";const $=document.createElement("p");$.innerText="$3.99 (6)",_.appendChild(H),_.appendChild(A),A.appendChild(N),A.appendChild(R),A.appendChild($)}()):d.classList.contains("navContact")?(console.log("Contact works"),n.innerText="",e(),function(){const e=document.getElementById("container"),t=document.createElement("div");t.classList.add("contactContainer"),e.appendChild(t);const n=document.createElement("img");n.src="../dist/images/contact_map.png",n.alt="Google Maps Image of Artemis Bakery Location",t.appendChild(n);const a=document.createElement("div");a.classList.add("addressContainer"),t.appendChild(a);const d=document.createElement("img");d.src="../dist/images/pin-icon.svg",d.alt="SVG image of a map pin",a.appendChild(d);const c=document.createElement("p");c.innerText="123 Howitt Street, North Ward, QLD, 4810",a.appendChild(c);const i=document.createElement("div");i.classList.add("phoneContainer"),t.appendChild(i);const o=document.createElement("img");o.src="../dist/images/phone-icon.svg",o.alt="SVG image of a phone",i.appendChild(o);const s=document.createElement("p");s.innerText="+123 456 789",i.appendChild(s);const r=document.createElement("div");r.classList.add("emailContainer"),t.appendChild(r);const l=document.createElement("img");l.src="../dist/images/email-icon.svg",l.alt="SVG image of a email",r.appendChild(l);const m=document.createElement("p");m.innerText="artemis.bakery@fakeemail.com",r.appendChild(m)}()):d.classList.contains("navHome")&&(console.log("Home works"),n.innerText="",e(),t())}))})();