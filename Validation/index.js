function validateForm(event) {
    event.preventDefault();
    
    let firstName = document.getElementById('first_name').value;
    let middleName = document.getElementById('middle_name').value;
    let lastName = document.getElementById('last_name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone_number').value;
    let dateOfBirth = document.getElementById('dob').value;
    let gender = document.getElementsByName('gender');
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let agreement = document.getElementById('accept');

    let today = new Date();
    let selectedDate = new Date(dateOfBirth);
    let eighteenYearsAgo = new Date(today);
    eighteenYearsAgo.setFullYear(today.getFullYear() - 18);

    let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

    let selectedgender;

    // Validate first name
    if (firstName === '') {
        swal({
            title: "All Fields Should be filled",
            text: "Please enter your first name",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('first_name').focus();
        return false;
    }

    // Validate last name
    if (lastName === '') {
        swal({
            title: "All Fields Should be filled",
            text: "Please enter your last name",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('last_name').focus();
        return false;
    }

    // Validate email
    if (email === '') {
        swal({
            title: "All Fields Should be filled",
            text: "Please enter your email",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('email').focus();
        return false;
    }

    if (!(email.includes('@'))) {
        swal({
            title: "Email is not Valid",
            text: "Please enter a valid email",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('email').focus();
        return false;
    }

    // Validate date of birth
    if (dateOfBirth === '') {
        swal({
            title: "All Fields Should be filled",
            text: "Please enter your Date Of Birth",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('dob').focus();
        return false;
    }

    if (selectedDate > eighteenYearsAgo) {
        swal({
            title: "Age limit",
            text: "You must be 18 years old or above",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('dob').focus();
        return false;
    }

    // Validate address
    if (address === '') {
        swal({
            title: "All Fields Should be filled",
            text: "Please enter your Address",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('address').focus();
        return false;
    }

    // Validate phone number
    if (phoneNumber === '' || phoneNumber.length !== 10) {
        swal({
            title: "Phone number is not valid",
            text: "Please enter a valid phone number",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('phone_number').focus();
        return false;
    }

    // Validate gender
    let genderSelected = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            selectedgender = gender[i].value;
            break;
        }
    }
    if (!genderSelected) {
        swal({
            title: "All Fields Should be filled",
            text: "Please choose your gender",
            icon: "warning",
            button: "OK"
        });
        gender[0].focus(); 
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
        return false;
    }

    // Validate password
    if (strongPasswordRegex.test(password)) {
        if (password === confirmPassword) {
        } else {
            swal({
                title: "Password error",
                text: "Passwords do not match",
                icon: "warning",
                button: "OK"
            });
            document.getElementById('password').focus();
            return false;
        }
    } else {
        swal({
            title: "Password not strong",
            text: "Password should contain at least 1 lowercase letter, 1 uppercase letter, at least 1 digit, at least 1 special character, and be minimum 8 characters long",
            icon: "warning",
            button: "OK"
        });
        document.getElementById('password').focus();
        return false;
    }

    alert(`Full name : ${firstName}${middleName}${lastName}\nGender:${selectedgender}\nEmail: ${email}\nDate of birth : ${dateOfBirth}\nAddress : ${address}`);
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

