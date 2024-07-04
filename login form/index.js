let hardCodedUsername = localStorage.getItem("username");
let hardCodedPassword = localStorage.getItem("password");

function validateForm(event){
    event.preventDefault();

    let username = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (username == ""){
        alert("username must not be empty");
    }else if (password == ""){
        alert("Password must not be empty");
    }

    if (username === hardCodedUsername ){
        if (password === hardCodedPassword ){
            window.location.href='home.html';
        }else{
            alert("password incorrect");
            return false;
        }
    }else{
        alert("username doesnt exists");
        return false;
    }
}

function saveData(event){
    event.preventDefault();
    let errorBox = document.getElementsByClassName('error-box');
    let errorText = document.getElementById('error_text');

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    let dateOfBirth = document.getElementById('date_of_birth').value;
    let gender = document.getElementsByClassName('gender');
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;

    let today = new Date();
    let selectedDate = new Date(dateOfBirth);

    if(selectedDate > today){
        errorText.textContent='Enter a Valid date , Date should not be Future';
        setTimeout(function(){
            errorText.textContent='';
        },3000);
        return false;
    }

    if(contact.length < 10){
        errorText.textContent='Enter a Valid contact Number';
        setTimeout(function(){
            errorText.textContent='';
        },5000);
        return false;
    }

    if(!(gender[0].checked || gender[1].checked || gender[2].checked)){
        errorText.textContent='Choose a gender !';
        setTimeout(function(){
            errorText.textContent='';
        },3000);
        return false;
    }

    if(password != cpassword){
        errorText.textContent='Passwords Doesnt Match';
        setTimeout(function(){
            errorText.textContent='';
        },3000);
    }else{
        if(localStorage.getItem("username") == username){
        }else{
            localStorage.setItem("username" , username);
            localStorage.setItem("password" , password);
            localStorage.setItem("email" , email);
            localStorage.setItem("contact" , contact);
            localStorage.setItem("dateOfBirth" , dateOfBirth);
            localStorage.setItem("gender" , gender);
            alert(`Username: ${username}\nPassword: ${password}\nEmail: ${email}\nContact: ${contact}\nDate of Birth: ${dateOfBirth}\nGender: ${gender.value}`);
            window.location.reload();
        }
    }
}