//Toggle menu button on click
const menu_btn = document.getElementById('menu_btn');
const menu_line = document.getElementById('menu_line');
const submit_btn = document.getElementById("contact-form");
const fieldName = document.getElementById("firstNameInput");
const fieldEmail = document.getElementById("inputEmail");
const fieldTel = document.getElementById("inputTel");
const fieldComment = document.getElementById("message");
const fieldWorkshop = document.getElementById("workshop");


menu_btn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu_line.classList.toggle("menu_active");
}

//Validation Form
const checkFunction = (input) => {
    const val = input.value;

    const errorText = document.getElementById("errorText");
    const errorEmail = document.getElementById("errorEmail");
    const errorTel = document.getElementById("errorTel");

//Validation Name Field
    if (input.type === "text") {
        let nameRe = /([^\sA-Za-z])+/g;
        if (nameRe.test(val)) {
            input.classList.add("invalid");
            errorText.innerHTML = "Please enter a valid name with alphabets only";
            return false;
        } else if (val === '' || val == null) {
            input.classList.add("invalid");
            console.log("err");
            errorText.innerHTML = "Required field";

            return false;
        } else {
            return true;
        }
//Validation Email Field
    } else if (input.type === "email") {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (val === '' || val == null) {
            input.classList.add("invalid");
            errorEmail.innerHTML = "Required field";
            return false;
        } else if ((re.test(val)) !== true) {
            input.classList.add("invalid");
            errorEmail.innerHTML = val + " is not valid. Please enter a valid e-mail address";
            return false;
        }   else {
            return true;
        }
//Validation Phone Field
    } else if (input.type === "tel") {
        let reg = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
        if (val === '' || val == null) {
            if (input.classList.contains('invalid')) {
                input.classList.remove('invalid');
                errorTel.innerHTML = "";
                return false;
            }
        } else if (reg.test(val) !== true) {
            input.classList.add("invalid");
            errorTel.innerHTML = "Please enter a valid phone number xxx-xxx-xxxx";
            return false;
        }  else {
            return true;
        }
    }


};

const correctFunction = (input) => {
    const errorText = document.getElementById("errorText");
    const errorEmail = document.getElementById("errorEmail");
    const errorTel = document.getElementById("errorTel");

//Reset Name Field
    if (input.type === "text") {
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
            errorText.innerHTML = "";
        }
//Reset Email Field
    } else if (input.type === "email") {
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
            errorEmail.innerHTML = "";
        }
//Reset Phone Field
    } else if (input.type === "tel") {
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
            errorTel.innerHTML = "";
        }
    }
};
//
// const submitFunction = (e) => {
//     e.preventDefault();
//     console.log("000");
//     if (!(!checkFunction(fieldName)&&!checkFunction(fieldEmail)&&!checkFunction(fieldTel))){
//       console.log("1");
//     }
// }
//
// submit_btn.addEventListener('submit', submitFunction) ;

