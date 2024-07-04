function validateForm(event){
    event.preventDefault();

    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let dateOfBirth = document.getElementById('dob').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let agreement = document.getElementById('accept');

    let errorMsg = document.getElementById('errorMsg');
    let today = new Date();
    let selectedDate = new Date(dateOfBirth);

    if (firstName == ''){
        errorMsg.textContent = 'all fields must not be empty'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('first_name').focus();
    }else if (lastName == ''){
        errorMsg.textContent = 'all fields must not be empty'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('last_name').focus();
    }else if(email == ''){
        errorMsg.textContent = 'all fields must not be empty'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('email').focus();
    }else if(dateOfBirth == ''){
        errorMsg.textContent = 'all fields must not be empty'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('dob').focus();
    }else if(password == ''){
        errorMsg.textContent = 'all fields must not be empty'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('password').focus();
    }else if(confirmPassword == ''){
        errorMsg.textContent = 'all fields must not be empty'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('confirm_password').focus();
    }else if(selectedDate > today){
        errorMsg.textContent = 'Date must not be future'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('dob').focus();
    }else if(password != confirmPassword){
        errorMsg.textContent = 'Passwords Doesnt Match'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('password').focus();
    }else if(!(email.includes('@') || email.length == 10)){
        errorMsg.textContent = 'Enter a valid email or phone number'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('email').focus();
    }
    else if(!(agreement.checked)){
        errorMsg.textContent = 'Please Accept the terms and conditions'
        setTimeout(function(){
            errorMsg.textContent = '';
        },3000)
        document.getElementById('accept').focus();
    }else{
        let state = email.includes('@') ? 'Email' : 'Phone Number'; 
        alert(`First Name : ${firstName}\n Last Name : ${lastName}\n ${state} : ${email}\n Date Of Birth : ${dob.value}\n Password : ${password}`)
    }
    
    
}