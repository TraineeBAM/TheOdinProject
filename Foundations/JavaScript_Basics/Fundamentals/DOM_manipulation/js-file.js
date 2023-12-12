const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para1 = document.createElement('p');
para1.classList.add('redPara');
para1.textContent = "Hey I'm red!";
para1.style.color = 'red';
container.appendChild(para1);

const para2 = document.createElement('h3');
para2.classList.add('bluePara');
para2.textContent = "I'm a blue h3!";
para2.style.color = 'blue';
container.appendChild(para2);

const body = document.body;
const div2 = document.createElement('div');
div2.classList.add('div2');
div2.style.borderWidth = '5px';
div2.style.borderStyle = 'solid';
div2.style.borderColor = 'black';
div2.style.backgroundColor = 'pink';

    const h1div = document.createElement('h1');
    h1div.textContent = "I'm a div"
    div2.append(h1div);

    const newpara = document.createElement('p');
    newpara.textContent = "ME TOO!";
    div2.append(newpara);


body.append(div2)
