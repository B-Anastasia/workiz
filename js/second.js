const input = document.getElementsByTagName('input');
const name = document.getElementById("firstNameInput");
const email = document.getElementById("inputEmail");
const tel = document.getElementById("inputTel");
const node = document.createElement("span");
const requiredText = "Required field";
node.innerHTML = requiredText;
window.onload=function () {
      for (let i=0; i<input.length; i++) {
          input[i].addEventListener('blur', () => {
              let field = input[i].id;
              if (field === "firstNameInput") {
                  let nameRe = /([^\sA-Za-z])+/g;
                  let nameForm = document.getElementById("inputName");
                  let nameValue = name.value;
                  if (nameValue === '' || nameValue == null) {
                      nameForm.appendChild(node);
                  } else if (nameRe.test(nameValue)) {
                      let nameError = node.innerHTML = "Please enter a valid name with alphabets only";
                      nameForm.appendChild(nameError);
                  } else{
                      nameForm.removeChild(node);
                  }
              }  else if (field==="inputEmail") {
                  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  let nameForm = document.getElementById("email");
                  let emailValue = email.value;
                  if (emailValue === '' || emailValue == null) {
                      nameForm.appendChild(node);
                  } else if (re.test(emailValue)) {
                      nameForm.removeChild(node);
                  } else {
                      let emailText =value + " is not valid. Please enter a valid e-mail address";
                      let emailError = node.innerHTML =emailText;
                      nameForm.appendChild(emailError);
                  }
              }
          });
      }
};