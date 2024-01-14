const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        showSuccess(input)
    }
    else{
        showError(input,"Email is not valid")
    }
}

function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
            isRequired=true;
        }
        else{
            showSuccess(input);
        }
    });
    return isRequired;
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be atmost ${max} characters`)        
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkpswdmatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, cpassword]);
    checkLength(username, 3, 15);
    checkEmail(email);
    checkLength(password, 6,20);
    checkpswdmatch(password, cpassword);
});



// if(username.value === ''){
//     showError(username, 'Username is required');
// }
// else{
//     showSuccess(username);
// }
// if(email.value === ''){
//     showError(email, 'Email is required');
// }
// else if(!isValidEmail(email.value)){
//     showError(email, 'Email is not valid');
// }
// else {
//     showSuccess(email);
// }
// if(password.value === ''){
//     showError(password, 'Password is required');
// }
// else{
//     showSuccess(password);
// }
// if(cpassword.value === ''){
//     showError(cpassword, 'Confirm Password is required');
// }
// else{
//     showSuccess(cpassword);
// }