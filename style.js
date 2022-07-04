const form = document.querySelector('form')
const email = document.getElementById('email')
const spanEmail = email.nextElementSibling
const password = document.getElementById('password')
const spanPassword = password.nextElementSibling

form.addEventListener('submit',(e) => {
  e.preventDefault()
  validation()
})

function validation(){
  if(email.value.trim() === ''){
    email.classList.remove('img-success')
    spanEmail.classList.remove('span-success')

    email.classList.add('img-error')
    spanEmail.classList.add('span-error')
    spanEmail.innerHTML = ('<small>Preencha este campo</small>')
  } else if(true) {
    email.classList.remove('img-error')
    spanEmail.classList.remove('span-error')

    email.classList.add('img-success')
    spanEmail.classList.add('span-success')
    spanEmail.innerHTML = ('<small>Tudo certo por aqui</small>')
  }
  
  if(password.value.trim() === ''){
    password.classList.remove('img-success')
    spanPassword.classList.remove('span-success')

    password.classList.add('img-error')
    spanPassword.classList.add('span-error')
    spanPassword.innerHTML = ('<small>Preencha este campo</small>')
  } else if(true) {
    password.classList.remove('img-error')
    spanPassword.classList.remove('span-error')

    password.classList.add('img-success')
    spanPassword.classList.add('span-success')
    spanPassword.innerHTML = ('<small>Tudo certo por aqui</small>')
  }
}