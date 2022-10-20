
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
   
    alert('please enter field');
  }
  else{
    console.log('success');
  }
  }

  localStorage.setItem('name', 'Abhay')
localStorage.setItem('lastName', 'krishna')

sessionStorage.setItem('name', 'Abhay')
sessionStorage.setItem('lastName', 'abhay')

document.cookie = `name=Kyle; expires=${new Date(9999, 0, 1).toUTCString()}`
document.cookie = `lastName=Smith; expires=${new Date(9999, 0, 1).toUTCString()}`
