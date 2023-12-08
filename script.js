const fullName = document.getElementById('fullname')
const email    = document.getElementById('email')
const password = document.getElementById('password')
const table    = document.getElementById('data')
const errors   = document.getElementById('errors')
const eye      = document.getElementById('eye')
function ready(){
    table.innerHTML += `<tr>
    <td id="errore">${fullName.value}</td>
    <td id="errore2">${email.value}</td>
    <td id="errore3">${password.value}</td>
  </tr>`
  if(fullName.value == 0 ^ email.value == 0 ^ password.value == 0){
       errors.innerHTML = `<p> All of the information need to be filled ! </p>`
  }
  if(email.value == 0){
    errors.innerHTML = `<p> All of the information need to be filled ! </p>`
  }
  if(password.value == 0){
    errors.innerHTML = `<p> All of the information need to be filled ! </p>`
  }
  
}
function toggle(){
    if(password.type == "password"){
       password.type = "text"
       eye.src = "./eye-fill.svg"
    }
    else if(password.type =="text"){
        password.type = "password"
        eye.src = "./eye-slash-fill.svg"
    }
}