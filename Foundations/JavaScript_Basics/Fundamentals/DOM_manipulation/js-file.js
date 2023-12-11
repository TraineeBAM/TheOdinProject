const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para1 = document.createElement('p');
para1.classList.add('redPara');
para1.textContent = "Hey I'm red!";

container.appendChild(para1);


