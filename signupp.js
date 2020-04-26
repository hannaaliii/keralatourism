// for showing the password strength on each  change on password
const indicatepassLength=()=>{
    if(password.value.length<8){
        passLengthIndicator.innerHTML='weak';
        passLengthIndicator.style.backgroundColor='red';
    }
    else if(password.value.length<12&&password.value.length>=8){
        passLengthIndicator.innerHTML='medium';
        passLengthIndicator.style.backgroundColor='orange';
    }
    else{
        passLengthIndicator.innerHTML='strong';
        passLengthIndicator.style.backgroundColor='green';
    }
    let passIndicatorLen=10+password.value.length*5;
    passLengthIndicator.style.width=`${passIndicatorLen}%`;
    passLengthIndicator.classList.remove('hidden');
}