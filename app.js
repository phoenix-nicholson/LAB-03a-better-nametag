// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const button1 = document.getElementById('green');
const button2 = document.getElementById('pink');
const button3 = document.getElementById('purple');
// initialize global state

// set event listeners 
button.addEventListener('click', ()=> {

  let newName = nameInput.value;
  firstName.textContent = newName;


});

button1.addEventListener('click', ()=> {
  let newColor = button1.value;
  document.getElementById('header').style.backgroundColor = 'green';
  document.getElementById('footer').style.backgroundColor = 'green';
});

button2.addEventListener('click', ()=> {
  let newColor = button2.value;
  document.getElementById('header').style.backgroundColor = 'hotpink';
  document.getElementById('footer').style.backgroundColor = 'hotpink';
});

button3.addEventListener('click', ()=> {
  let newColor = button3.value;
  document.getElementById('header').style.backgroundColor = 'purple';
  document.getElementById('footer').style.backgroundColor = 'purple';
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
