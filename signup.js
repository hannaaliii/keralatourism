let email=document.getElementById("email");
let error=document.getElementById("error");
let pwd=document.getElementById("pwd");
let phonenum=document.getElementById("phoneum");
let msg=document.getElementById("msg").innerHTML = strength;
let msg=document.getElementById("msg").style.color = color;
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML= "Valid";
        error.style.color= "green";
        return true;
        

    }
    else if(password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
}