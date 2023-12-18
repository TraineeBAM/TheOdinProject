const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function(){
        button.style.transition = "transform 0.2s ease-in-out";
        button.style.transform = "scale(0.95)";
    });
    
    button.addEventListener('mouseout', function(){
        button.style.transition = 'transform 0.2s ease-in-out';
        button.style.transform = 'scale(1)';
    });
});

const screen = document.querySelector('.screen');
const userInput = document.createElement('div');
userInput.classList.add('userInput')
userInput.textContent = "";
buttons.forEach(button => {
    button.addEventListener('click', function(){
        if(button.textContent === "Clear"){
            userInput.textContent = "";
        } else if(button.textContent === "Delete"){
            userInput.textContent = userInput.textContent.slice(0, -1);
        }
        else {
            userInput.textContent += button.textContent;
        }
        screen.appendChild(userInput);
    });
});
screen.appendChild(userInput)

const operate = function(a, o, b){
    if(o === "+"){
        return a + b; 
    } else if(o === "-"){
        return a - b;
    } else if (o === "*"){
        return a * b;
    } else if (o === '/'){
        return a / b;
    }
    console.log(operate);
}