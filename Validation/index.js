function togglePersonalDetails(event){
    event.preventDefault();
    let personalDetails = document.getElementById('checkbox');
    let dateofBirthLabel = document.getElementById('dateOfBirth');
    let mailLabel = document.getElementById('mail');


    if (personalDetails.checked){
        console.log("checked")
        dateofBirthLabel.textContent='Date of Birth ';
        mailLabel.textContent='Email';
        let optionals = document.getElementsByClassName('optional');
        for(let i = 0 ; i < optionals.length ; i ++){
            optionals[i].classList.remove('hidden');
        }
    }else{
        dateofBirthLabel.textContent='Date of Birth (optional)';
        mailLabel.textContent='Email (optional)';
        let optionals = document.getElementsByClassName('optional');
        for(let i = 0 ; i < optionals.length ; i ++){
            optionals[i].classList.add('hidden');
        }
    }
}

function validateForm(event) {
    event.preventDefault();
    
    let firstName = document.getElementById('first_name').value;
    let middleName = document.getElementById('middle_name').value;
    let lastName = document.getElementById('last_name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone_number').value;
    let dateOfBirth = document.getElementById('dob').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let agreement = document.getElementById('accept');
    let personalDetails = document.getElementById('checkbox');

    let firstNameLabel = document.getElementById('first-name-label');
    let lastNameLabel = document.getElementById('last-name-label');
    let addressLabel = document.getElementById('address-label');
    let numberLabel = document.getElementById('number-label');
    let dateofBirthLabel = document.getElementById('dateOfBirth');
    let mailLabel = document.getElementById('mail');
    let passwordLabel = document.getElementById('password-label');
    let confirmPasswordLabel = document.getElementById('confirm-password-label');

    let today = new Date();
    let selectedDate = new Date(dateOfBirth);
    let age = today.getFullYear() - selectedDate.getFullYear();

    if(selectedDate.getMonth < today.getMonth || selectedDate.getDate < today.getDate || selectedDate.getDay < today.getDate){
        age--;
    }

    let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

    // Validate first name
    if (!/^(?!.*(?:[.\s]{2}|[0-9]{2,}|[\W_]))[a-zA-Z\s.]{3,15}$/.test(firstName)) {
        firstNameLabel.textContent = 'Please enter a valid name';
        document.getElementById('first_name').focus();
        document.getElementById('first-name-label').style.color = 'red';
        document.getElementById('first_name').style.borderColor = 'red';
        return false;
    }

    // Validate last name
    if (!/^(?!.*(?:[.\s]{2}|[0-9]{2,}|[\W_]))[a-zA-Z\s.]{1,10}$/.test(lastName)) {
        lastNameLabel.textContent = "Please enter your last name"
        document.getElementById('last_name').focus();
        document.getElementById('last-name-label').style.color = 'red'
        document.getElementById('last_name').style.borderColor="red";
        return false;
    }
 


    if(personalDetails.checked){
        // Validate email
        if (email === '') {
            mailLabel.textContent = "Please enter your email";
            document.getElementById('email').focus();
            document.getElementById('email').style.borderColor="red";
            document.getElementById('mail').style.color='red';
            return false;
        }

        if (!(email.includes('@'))) {
            document.getElementById('email').focus();
            document.getElementById('email').style.borderColor="red";
            return false;
        }
         // Validate date of birth
        if (dateOfBirth === '' || age < 18) {
            dateofBirthLabel.textContent = "you must be 18 yrs old or above";
            document.getElementById('dob').focus();
            document.getElementById('dob').style.borderColor="red";
            document.getElementById('dateOfBirth').style.color = 'red';
            return false;
        }

    
        if (!gender) {
            swal({
                title: "All Fields Should be filled",
                text: "Please choose your gender",
                icon: "warning",
                button: "OK"
            });
            return false;
        }

    }
    
    // Validate address
    if (!/^(?!.*(?:[.\s]{2}|[0-9]{2,}|[\W_]))[a-zA-Z\s.]{5,30}$/.test(address)) {
        addressLabel.textContent = "Please enter a valid Address";
        document.getElementById('address').focus();
        document.getElementById('address').style.borderColor="red";
        document.getElementById('address-label').style.color = 'red';
        return false;
    }

    // Validate phone number
    if (phoneNumber === '' || phoneNumber.length !== 10) {
        numberLabel.textContent = "Please enter a valid phone number";
        document.getElementById('phone_number').focus();
        document.getElementById('phone_number').style.borderColor="red";
        document.getElementById('number-label').style.color = 'red'
        return false;
    }

    

    // Validate terms and conditions
    if (!agreement.checked) {
        swal({
            title: "Agreement",
            text: "Please accept terms and conditions",
            icon: "warning",
            button: "OK"
        });
        agreement.focus();
        agreement.style.borderColor="red";
        return false;
    }

    // Validate password
    if (strongPasswordRegex.test(password)) {
        if (password === confirmPassword) {
        } else {
            passwordLabel.textContent = "Passwords do not match";
            document.getElementById('password').focus();
            document.getElementById('password').style.borderColor="red";
            document.getElementById('password-label').style.color='red';
            return false;
        }
    } else {
        passwordLabel.textContent = "Password should contain at least 1 lowercase letter, 1 uppercase letter, at least 1 digit, at least 1 special character, and be minimum 8 characters long";
        document.getElementById('password').focus();
        document.getElementById('password').style.borderColor="red";
        document.getElementById('password-label').style.color='red';
        return false;
    }

    window.location.href = 'dashboard.html';
    return true;
}

function togglePassword(event){
    event.preventDefault();
    let password = document.getElementById('password');
    let confirm_password = document.getElementById('confirm_password');
    let toggleBtn = document.getElementById('toggleBtn');

    if(password.type === "password"){
        password.type = "text";
        confirm_password.type = "text";
        toggleBtn.textContent = "HIDE"
    }else{
        password.type = "password";
        confirm_password.type = "password";
        toggleBtn.textContent = "SHOW"
    }
}

function changedFields(){
    firstName = document.getElementById('first_name').style.borderColor = '';
    middleName = document.getElementById('middle_name').style.borderColor = '';
    lastName = document.getElementById('last_name').style.borderColor = '';
    address = document.getElementById('address').style.borderColor = '';
    email = document.getElementById('email').style.borderColor = '';
    phoneNumber = document.getElementById('phone_number').style.borderColor = '';
    dateOfBirth = document.getElementById('dob').style.borderColor = '';
    gender = document.getElementsByName('gender');
    password = document.getElementById('password').style.borderColor = '';
    confirmPassword = document.getElementById('confirm_password').style.borderColor = '';
    agreement = document.getElementById('accept');
    personalDetails = document.getElementById('checkbox');


    document.getElementById('first-name-label').textContent="First Name";
    document.getElementById('first-name-label').style.color = 'black';
    document.getElementById('last-name-label').textContent="Last Name";
    document.getElementById('last-name-label').style.color = 'black'
    document.getElementById('address-label').textContent="Address";
    document.getElementById('address-label').style.color = 'black';
    document.getElementById('number-label').textContent="Phone Number";
    document.getElementById('number-label').style.color = 'black'
    document.getElementById('dateOfBirth').textContent="Date of birth";
    document.getElementById('dateOfBirth').style.color = 'black';
    document.getElementById('mail').textContent="Email";
    document.getElementById('mail').style.color='black';
    document.getElementById('password-label').textContent="Password";
    document.getElementById('password-label').style.color='black';
    document.getElementById('confirm-password-label').textContent="Confirm Password";
}