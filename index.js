const password = document.getElementById('password')
const passwordConfirm = document.getElementById('confirm_password')

var validText = document.getElementById("password-warning")

function CheckPassword() {
    if (password.value != passwordConfirm.value) {
        validText.innerText = '*Password do not match'
        validText.classList.add("error")
        password.style.borderColor = "#C13838"
        passwordConfirm.style.borderColor = "#C13838"
    } else if (password.value == passwordConfirm.value) {
        validText.innerText = ''
        validText.classList.remove("error")
        password.style.borderColor = "#3cd33c";
        passwordConfirm.style.borderColor = "#3cd33c"
    }
}

password.onchange = CheckPassword
passwordConfirm.onkeyup = CheckPassword