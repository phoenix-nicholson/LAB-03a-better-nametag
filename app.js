// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const button1 = document.getElementById('green');
const button2 = document.getElementById('pink');
const button3 = document.getElementById('purple');
const button4 = document.getElementById('he');
const button5 = document.getElementById('she');
const pronoun = document.getElementById('pronoun');
const button6 = document.getElementById('they');
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
button4.addEventListener('click', ()=> {
  document.getElementById('pronoun').textContent = 'He/Him';


});
button5.addEventListener('click', ()=> {
  document.getElementById('pronoun').textContent = 'She/Her';
 
});
button6.addEventListener('click', ()=> {
  document.getElementById('pronoun').textContent = 'They/Them';
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
