function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmpass = document.getElementById("comfirmpass").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    if (name == "") {
        document.getElementById("SpanName").innerHTML =
            " ** Please fill the Name field";
        return false;
    }


    if (email == "") {
        document.getElementById("spanemail").innerHTML =
            " ** Please fill the email id field";
        return false;
    }
    if (email.indexOf("@") <= 0) {
        document.getElementById("spanemail").innerHTML = " **Your email is  Invalid ";
        return false;
    }
    if (
        //last dot position conditions
        email.charAt(email.length - 4) != "." &&
        email.charAt(email.length - 3) != "."
    ) {
        document.getElementById("spanemail").innerHTML = " **Your email is Invalid ";
        return false;
    }
    if (username == "") {
        document.getElementById("spanusername").innerHTML =
            " ** Please fill the username field";
        return false;
    }
    if (username.length <= 3 || username.length > 25) {
        document.getElementById("spanusername").innerHTML =
            " ** Username lenght must be between 3 and 25";
        return false;
    }
    //if username is number then 
    if (!isNaN(username)) {
        document.getElementById("spanusername").innerHTML =
            " ** only characters are allowed";
        return false;
    }
    if (password == "") {
        document.getElementById("spanpassword").innerHTML =
            " ** Please fill the password field";
        return false;
    }
    if (password.length <= 8 || password.length > 30) {
        document.getElementById("spanpassword").innerHTML =
            " ** Passwords lenght must be between  8 and 30";
        return false;
    }
    if (confirmpass == "") {
        document.getElementById("spanconfirmpassword").innerHTML =
            " ** Please fill the password field";
        return false;
    }
    if (password != confirmpass) {
        document.getElementById("spanconfirmpassword").innerHTML =
            " ** Password are not match";
        return false;
    }
    if (mobileNumber == "") {
        document.getElementById("spanmobileno").innerHTML =
            " ** Please fill the mobile NUmber field";
        return false;
    }
    if (isNaN(mobileNumber)) {
        document.getElementById("spanmobileno").innerHTML =
            " ** you must write digits only not characters";
        return false;
    }
    if (mobileNumber.length != 11) {
        document.getElementById("mobileno").innerHTML =
            " ** Mobile Number must be 11 digits only";
        return false;
    }
   
}


function display() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmpass = document.getElementById("comfirmpass").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    if (name != "") {
        document.getElementById("SpanName").style.display = "none";
        return false;
    }



}