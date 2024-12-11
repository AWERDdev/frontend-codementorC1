//*form elements
const form = document.getElementById('form');
const submit_btn = document.getElementById('submit-btn');
const RadioBtns = document.getElementsByName('a');
const Check_box = document.getElementById('Check-box');
const First_Name_bar = document.getElementById('First-Name');
const last_Name_bar = document.getElementById('last-Name');
const Email_bar = document.getElementById('Email');
const Message_bar = document.getElementById('Message');
const Message_box = document.querySelector('.Message-box');


//* warning lables
const Warning_errorRadioLabel = document.querySelector('.Warning-errorRadio');
const Warning_errorEmail = document.querySelector('.Warning-errorEmail');
const Warning_error_Message_inputLabel = document.getElementById('Warning-error-Message-input');
const Warning_error_firstNameLabel = document.getElementById('Warning-error-firstName');
const Warning_error_lastNameLabel = document.getElementById('Warning-error-lastName');
const Warning_error_checkboxLabel = document.getElementById('Warning-error-checkbox');

//* varibles
let isSelected = false


//* CSS styling
const valid = 'valid';
const invalid = 'invalid';
const visibleposition = 'visibleposition';
const defaultPosation = 'Message-box';

//* functions

//* to validate the Email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }


form.addEventListener("submit",(e)=>{
    e.preventDefault();


//*form Values
const First_Name = document.getElementById('First-Name').value
const last_Name = document.getElementById('last-Name').value
const Email = document.getElementById('Email').value
const Message = document.getElementById('Message').value


    if(!First_Name){
    console.log('This is required')
    Warning_error_firstNameLabel.textContent="This is Required "
    First_Name_bar.classList.add(invalid);
}else{
    console.log('This is valid');
    First_Name_bar.classList.add(valid);
       Warning_error_firstNameLabel.textContent=""
}


if(!last_Name){
    console.log('This is required')
    Warning_error_lastNameLabel.textContent="This is Required "
    last_Name_bar.classList.add(invalid);
}else{
    console.log('This is valid');
    last_Name_bar.classList.add(valid);
       Warning_error_lastNameLabel.textContent=""
}


if(!Message){
    console.log('This is required')

    Warning_error_Message_inputLabel.textContent="This is Required";
    Message_bar.classList.add(invalid);
}else{
    console.log('This is valid');
    Message_bar.classList.add(valid);
    Warning_error_Message_inputLabel.textContent="";
}



if(!Email){
    console.log('This is required')
    Warning_errorEmail.textContent="This is Required "
    Email_bar.classList.add(invalid)
   }
   if(validateEmail(Email)){
    console.log('valid email');
    Email_bar.classList.add(valid)
       Warning_errorEmail.textContent = ''
   }else{
    console.log('invalid email')
    Warning_errorEmail.textContent = 'Please Enter a valid Email'
    Email_bar.classList.add(invalid)
   }

for(let i = 0; i<RadioBtns.length;i++){
    if(RadioBtns[i].checked){
        isSelected = true
        
    }
}
if(!isSelected){
console.log('Please select a query type');
Warning_errorRadioLabel.textContent = 'Please select a query type';
}
else{
    console.log('thanks for selecting')
    Warning_errorRadioLabel.textContent = '';
}
if(Check_box.checked){
    console.log('Thanks for selecting');
       Warning_error_checkboxLabel.textContent=""
    Check_box.classList.add(valid)
}else{
    console.log('To submit the form you must consent to being contacted');
    Warning_error_checkboxLabel.textContent="To submit the form you must consent to being contacted"
    Check_box.classList.add(invalid)
}
    Message_box.classList.remove(defaultPosation);
    Message_box.classList.add(visibleposition);
 

})