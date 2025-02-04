const password = document.querySelector(".password");
const checkbox = document.querySelector(".checkbox");
const btn = document.querySelector("button");


// Using CheckBox
checkbox.addEventListener("click", showPassword)
function showPassword(){
    if(checkbox.checked === true){
        password.type = "text";
    }else if(checkbox.checked === false) {
        password.type = "password";
    }
}

// Using Button ----------------------------------------->
// let passwordVisibility = false;
// btn.addEventListener("click", () => {
//     if(passwordVisibility == false){
//         password.type = "text";
//         passwordVisibility = true;
//     }else{
//         password.type = "password";
//         passwordVisibility = false;
//     }
    
// })


