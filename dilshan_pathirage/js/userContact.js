const btn = document.getElementById('button');
document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_a7shrha';
        const templateID = 'template_8vmwxjp';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

function validateForm() {

    var name = document.getElementById("to_name");
    var email = document.getElementById("from_name");
    var message = document.getElementById("message");


    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    var successMessage = document.getElementById("successMessage");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";


    var valid = true;


    if (name.value.trim() === "") {
        nameError.innerHTML = "Name is required.";
        valid = false;
    }


    if (email.value.trim() === "") {
        emailError.innerHTML = "Email is required.";
        valid = false;
    } else if (!validateEmail(email.value)) {
        emailError.innerHTML = "Invalid email format.";
        valid = false;
    }

    if (message.value.trim() === "") {
        messageError.innerHTML = "Message is required.";
        valid = false;
    }
    if(valid){
        successMessage.innerHTML = "Successfully Send Message";
    }
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
