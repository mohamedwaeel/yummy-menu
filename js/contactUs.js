
export function validateName() {
    const regex = /^[A-Za-z][A-Za-z\s-]*$/;
    let isValid=regex.test($('#name').val())
    return isValid
}
export function validateEmail() {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid=regex.test($('#email').val())
    return isValid
}
export function validatePhone() {
    const regex = /^(012|011|015|010)\d{8}$/;
    let isValid=regex.test($('#phone').val())
    return isValid
}
export function validateAge() {
    const regex = /^(0?[1-9]|[1-9][0-9])$/;
    let isValid=regex.test($('#age').val())
    return isValid

}
export function validatePassword() {

    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let isValid=regex.test($('#password').val())
    return isValid
}
export function validateRePassword() {

    return $('#repassword').val()==$('#password').val()
}
let nameInput = false;
let emailInput = false;
let phoneInput = false;
let ageInput = false;
let passwordInput = false;
let repasswordInput = false;

function takeInput(){
$('#name').on('input', () => {
    nameInput = true;
});
$('#phone').on('input', () => {
    phoneInput = true;
});
$('#email').on('input', () => {
    emailInput = true;
});
$('#age').on('input', () => {
    ageInput = true;
});
$('#phone').on('input', () => {
    phoneInput = true;
});
$('#password').on('input', () => {
    passwordInput = true;
    setTimeout(() => {
    }, 1000)
});
$('#repassword').on('input', () => {
    repasswordInput = true;
    setTimeout(() => {
    }, 1000)
});
}
    
  
function inputsValidation() {
    if (nameInput) {
        if (!validateName()) {
            $('#name').next('.alert-danger').remove();
                $('#name').after('<div class="alert alert-danger my-1">Special characters and numbers not allowed</div>');
            } else {
                $('#name').next('.alert-danger').remove();
            }
    }
    if (emailInput) {

        if (!validateEmail()) {
            $('#email').next('.alert-danger').remove();
            $('#email').after('<div class="alert alert-danger my-1">Email not valid *exemple@yyy.zzz</div>');
        } else {
            $('#email').next('.alert-danger').remove();
        }
    }

    if (phoneInput) {
        if (!validatePhone()) {
            $('#phone').next('.alert-danger').remove();
            $('#phone').after('<div class="alert alert-danger my-1">Enter valid Phone Number</div>');
        } else {
            $('#phone').next('.alert-danger').remove();
        }
    }

    if (ageInput) {
        if (!validateAge()) {
            $('#age').next('.alert-danger').remove();
            $('#age').after('<div class="alert alert-danger my-1">Enter valid age</div>');
        } else {
            $('#age').next('.alert-danger').remove();
        }
    }

    if (passwordInput) {
        if (!validatePassword()) {
            $('#password').next('.alert-danger').remove();
            $('#password').after('<div class="alert alert-danger my-1">Enter valid password *Minimum eight characters, at least one letter and one number:*</div>');
        } else {
            $('#password').next('.alert-danger').remove();
        }
    }
    if (repasswordInput) {
        if (!validateRePassword()) {
            $('#repassword').next('.alert-danger').remove();
            $('#repassword').after('<div class="alert alert-danger my-1">Enter valid repassword</div>');
        } else {
            $('#repassword').next('.alert-danger').remove();
        }
    }


    if (validateName() &&
        validateEmail() &&
        validateAge() &&
        validatePhone() &&
        validatePassword()&&
        validateRePassword() ) {
            $('#submit').removeAttr('disabled');
            
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}
  
takeInput()
$('input').on('keyup',()=>{
    inputsValidation()
})

function clearForm(){
    $('#name').val('')
    $('#email').val('')
    $('#phone').val('')
    $('#age').val('')
    $('#password').val('')
    $('#repassword').val('')
}

$('#submit').on('click',()=>{
    clearForm();
})
