// select all elements (buttons) 
// then select the body

const buttons = document.querySelectorAll('.button'); // to select all elements
const body = document.querySelector('body'); // to select the whole body 

// we can apply forEach on NodeList and to select each individual element
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e) { // to listen when clicked
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    });
});