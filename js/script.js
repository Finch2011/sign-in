const fullName = document.getElementById('fullname')
const email    = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const table    = document.getElementById('data')
const errors   = document.getElementById('errors')
const eye      = document.getElementById('eye')
const eye2      = document.getElementById('eye2')
const information = {
   name : "",
   emails : "" , 
   passwords : ""
}

function ready(){
    
  if(fullName.value.length == 0 && email.value.length == 0 && password.value.length == 0 && password2.value.length == 0){
       errors.innerHTML = `<p> All of the information need to be filled ! </p>`
  }
  else if(fullName.value.length == 0){
    errors.innerHTML = `<p> Fullname is required ! </p>`
  }
  else if(email.value.length == 0){
    errors.innerHTML = `<p> email is required ! </p>`
   }
   else if(password.value.length == 0){
    errors.innerHTML = `<p> password is required ! </p>`
   }
   else if(password2.value.length == 0){
    errors.innerHTML = `<p> password is required ! </p>`
    
   }
   else if(password.value != password2.value){
    errors.innerHTML = `<p> The password does not match! </p>`
}
   

  else{
    information.name = fullName.value.toLowerCase()
    information.emails = email.value.toLowerCase()
    information.passwords = password.value.toLowerCase()
  
  table.innerHTML += `<tbody id="remove-${information.name.toLowerCase()}"><tr>
  <td>${information.name}</td>
  <td>${information.emails}</td>
  <td>${information.passwords}</td>
</tr>
</tbody> `
   
}
}
function ready2(){
  let remove3 = document.getElementById(`remove-${fullName.value.toLowerCase()}`)
  remove3.remove()
}
function more(){
  if(fullName.value.length < 8){
    errors.innerHTML = `<p>  fullname must have at least 8 characters ! </p>`
  }
  else{
    errors.innerHTML = ""
  }
}
function more2(){
   if(email.value.length < 8){
    errors.innerHTML =  `<p>  email must have at least 8 characters ! </p>`
   }
   else{
    errors.innerHTML = ""
  }
}
function more3(){
  if (password.value.length <8  && password2.value <8){
    errors.innerHTML = `<p> password  must have at least 8 characters ! </p>`
   }
   else{
    errors.innerHTML = ""
  }
}
function toggle(){
    if(password.type == "password"){
       password.type = "text"
       eye.src = "./assets/eye-fill.svg"
    }
    else if(password.type =="text"){
        password.type = "password"
        eye.src = "./assets/eye-slash-fill.svg"
      }

    }
  function toggle2(){
    if(password2.type == "password"){
      password2.type = "text"
      eye2.src = "./assets/eye-fill.svg"
   }
   else if(password2.type =="text"){
       password2.type = "password"
       eye2.src = "./assets/eye-slash-fill.svg"
   }
  }
