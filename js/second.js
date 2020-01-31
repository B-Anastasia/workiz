//Validation form
const name = document.getElementById("firstNameInput");
const email = document.getElementById("inputEmail");
const tel = document.getElementById("inputTel");
const form = document.getElementById("contact-form");


//Creating error
const node = document.createElement("span");

// Validation field "Name"

name.addEventListener('blur', () => {
    let nameForm = document.getElementById("inputName");
    let nameRe = /([^\sA-Za-z])+/g;
    let value = name.value;
    if (value === '' || value == null) {
        node.innerHTML = "Required field";
        nameForm.appendChild(node);
    } else if (nameRe.test(value)) {
        node.innerHTML = "Please enter a valid name with alphabets only";
        nameForm.appendChild(node);
    } else {
        nameForm.removeChild(node);

    }
});


// Validation field "E-mail"

email.addEventListener('blur', () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailForm = document.getElementById("email");
    let value = email.value;
    if (value === '' || value == null) {
        emailForm.appendChild(node);
    } else if (re.test(value)) {
        emailForm.removeChild(node);
    } else {
        node.innerHTML = value + " is not valid. Please enter a valid e-mail address";
        emailForm.appendChild(node);
    }
});

// email.addEventListener('focus', ()=>{
//     let nameForm = document.getElementById("email");
//       if (email.nextElementSibling){
//           node.innerHTML="";
//           nameForm.removeChild(node);
//       }
// })  ;

// Validation field "Phone"

tel.addEventListener('blur', ()=>{
    let value=tel.value;
    let reg = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    let nameForm = document.getElementById('phone');
    if (reg.test(value)!==true){
        node.innerHTML = "Please enter a valid phone number xxx-xxx-xxxx";
        nameForm.appendChild(node);
    }  else{
        nameForm.removeChild(node);
    }
})  ;

// form.addEventListener('submit' , (e)=>{
//     let messages = [];
//     if (name.value == '' || name.value== null)      {
//         messages.push('Name is required')
//     }
//
//     if (messages.length>0){
//         e.preventDefault();
//         errorText.innerText = messages.join(', ');
//     }
// })  ;