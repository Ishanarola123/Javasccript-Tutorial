
function submitForm(event){
    //Preventing page refresh
    event.preventDefault();
 }
function validate() {
    
    let password1=document.myForm.password.value;
    let password2=document.myForm.password2.value;
    console.log(password1)
    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    if (password1 == "") {
        alert("Please provide your password!");
        document.myForm.Name.focus();
        return false;
    }
    if (password2 == "") {
        alert("Please provide your confirm password!");
        document.myForm.Name.focus();
        return false;
    }
    // console.log(password1);
    // console.log(password2);
    if(password1 != "" && password2 != ""){
      matchpass(password1,password2) ;
        
    }
    if (document.myForm.EMail.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus();
        validateEmail(document.myForm.EMail.value);
        return false;
    }
    if (document.myForm.Zip.value == "" || isNaN(document.myForm.Zip.value) ||
        document.myForm.Zip.value.length != 5) {

        alert("Please provide a zip in the format #####.");
        document.myForm.Zip.focus();
        return false;
    }
    if (document.myForm.Country.value == "-1") {
        alert("Please provide your country!");
        return false;
    }
    return (true);
}

function validateEmail(user_email) {
    
    atpos = user_email.indexOf("@");
    dotpos = user_email.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus();
        return false;
    }
    return (true);
}

function matchpass(firstpassword,secondpassword) {
    if (firstpassword == secondpassword) {
        alert("passwords are same!");
        return true;
    }
    else {
        alert("password must be same!");
        return false;
    }
}  