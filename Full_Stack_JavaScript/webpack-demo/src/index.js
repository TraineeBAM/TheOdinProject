import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    element.textContent = myName('Brandon');
    return element;
  }
  
  document.body.appendChild(component());
  