let form = document.querySelector('form')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let msgValidationError = document.querySelectorAll('.msgValidation-error')
let msgValidationSuccess = document.querySelectorAll('.msgValidation-success')
let errorMessage = document.querySelectorAll('.error-message')
let smallSuccess = document.querySelectorAll('.success-message')
let inputemail = document.getElementById('email')
let inputpassword = document.getElementById('password')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  validation()
})

function validation() {
  if(inputemail.value.trim() === '') {
    msgValidationError[0].previousElementSibling.style.borderColor = "#dc3545"
    msgValidationError[0].style.visibility = "visible"
    msgValidationSuccess[0].style.visibility = "hidden"
    errorMessage[0].innerText = 'Preencha este campo'
  } else if(inputemail.value.trim() !== ''){
    msgValidationError[0].previousElementSibling.style.borderColor = "#198754"
    msgValidationError[0].style.visibility = "hidden"
    msgValidationSuccess[0].style.visibility = "visible"
    smallSuccess[0].innerText = 'Tudo certo por aqui'
  } 

  if(inputpassword.value.trim() === '') {
    msgValidationError[1].previousElementSibling.style.borderColor = "#dc3545"
    msgValidationError[1].style.visibility = "visible"
    msgValidationSuccess[1].style.visibility = "hidden"
    errorMessage[1].innerText = 'Preencha este campo'
  } else if(inputpassword.value.trim() !== ''){
    msgValidationError[1].previousElementSibling.style.borderColor = "#198754"
    msgValidationError[1].style.visibility = "hidden"
    msgValidationSuccess[1].style.visibility = "visible"
    smallSuccess[1].innerText = 'Tudo certo por aqui'
  }  

}