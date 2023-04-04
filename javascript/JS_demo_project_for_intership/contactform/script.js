
var divform = document.getElementById("formdiv");

var f = document.createElement("form");
f.setAttribute("name", "myForm");
f.setAttribute("id", "myForm");
divform.appendChild(f);

var h = document.createElement("h4");
h.innerHTML = "Contact Form";
f.appendChild(h);

var line = document.createElement('hr');
f.appendChild(line);

var linebreak = document.createElement('br');
f.appendChild(linebreak);

var namelabel = document.createElement('label');
namelabel.innerHTML = "Your Name : ";
f.appendChild(namelabel);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "uname");
inputelement.setAttribute("id", "uname");
inputelement.setAttribute("required", "");
f.appendChild(inputelement);

f.appendChild(linebreak);
var emaillabel = document.createElement('label');
emaillabel.innerHTML = "Your Email : ";
f.appendChild(emaillabel);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "Email");
inputelement.setAttribute("id", "uemail");
inputelement.setAttribute("required", "");
f.appendChild(inputelement);

var emailbreak = document.createElement('br');
f.appendChild(emailbreak);

var messagelabel = document.createElement('label');
messagelabel.innerHTML = "Your Message : ";
f.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "umessage");
texareaelement.setAttribute("id", "umsg");
texareaelement.setAttribute("required", "");
f.appendChild(texareaelement);

var messagebreak = document.createElement('br');
f.appendChild(messagebreak);

var agelabel = document.createElement('label');
agelabel.innerHTML = "Your Age: ";
f.appendChild(agelabel);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "number");
inputelement.setAttribute("name", "age");
inputelement.setAttribute("min", "18");
inputelement.setAttribute("max", "100");
inputelement.setAttribute("required", "");
inputelement.setAttribute("id", "uage");

f.appendChild(inputelement);

var agebreak = document.createElement('br');
f.appendChild(agebreak);


var submitelement = document.createElement('input');
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
submitelement.setAttribute("id", "SubmitBtn");
f.appendChild(submitelement);

var uppdatebreak = document.createElement('br');
f.appendChild(uppdatebreak);

var updateelement = document.createElement('input');
updateelement.setAttribute("type", "submit");
updateelement.setAttribute("name", "dsubmit");
updateelement.setAttribute("value", "Update");
updateelement.setAttribute("id", "UpdateBtn");
f.appendChild(updateelement);

document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
});
document.getElementById("SubmitBtn").addEventListener("click", validateEmail);

// function validate() {

//     if (document.myForm.uname.value == "") {
//         alert("Please provide your name!");
//         document.myForm.uname.focus();
//         return false;
//     }
//     if (document.myForm.Email.value == "") {
//         alert("Please provide your Email!");
       
//         validateEmail(document.myForm.Email.value);
//         document.myForm.Email.focus();
//         return false;
//     }
//     if (document.myForm.umessage.value == "") {
//         alert("Please provide your message!");
//         document.myForm.umessage.focus();
//         validateEmail(document.myForm.umessage.value);
//         return false;
//     }
//     if (document.myForm.uage.value == "") {
//         alert("Please provide your age!");
//         document.myForm.uage.focus();
//         return false;
//     }
//     savedata();
//     return (true);
// }

function validateEmail(user_email) {

    var user_email = document.myForm.Email.value;

    atpos = user_email.indexOf("@");
    dotpos = user_email.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID");
        document.myForm.Email.focus();
        return false;
    }
    else {
        alert("email is correct");
        savedata();

    }
    return (true);


}

//fetch data 
function showdata() {
    let fetch_data, data;
    console.log("Get data");
    fetch_data = localStorage.getItem("users")
    data = JSON.parse(fetch_data);
    console.log(fetch_data);
    console.log(typeof data);

    let out = "";
    data.map((value, index) => {
        let placeholder = document.querySelector("#data-output");
        out += `
			<tr>
			     <td>${index}</td>
				<td>${value.username}</td>
				<td>${value.email}</td>
				<td>${value.msg}</td>
				<td>${value.age}</td>
                <td><button onclick="updatedata(${index})" id="updatebtn">Edit</button></td>
                <td><button onclick="deletedata(${index})">Delete</button></td>
				
			</tr>
		`;
        placeholder.innerHTML = out;

    });
}

document.onload = showdata();
// document.onload = document.getElementById("UpdateBtn").style.display = "none";

function savedata() {

    var username = document.getElementById("uname").value;
    var email = document.getElementById("uemail").value;
    var msg = document.getElementById("umsg").value;
    var age = document.getElementById("uage").value;
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    if(user_records.some((v)=>{v.email== email})){
        alert("data is duplicate ");
    }
    else{
        user_records.push({
            "username": username,
            "email": email,
            "msg": msg,
            "age": age
        })
    }

    
    localStorage.setItem("users", JSON.stringify(user_records));
    showdata();

    document.getElementById("uname").value = "";
    document.getElementById("uemail").value = "";
    document.getElementById("umsg").value = "";
    document.getElementById("uage").value = "";

}


function deletedata(index) {

    console.log("remove button clicked on  " + index + "value");

    var userlist;
    if (localStorage.getItem("users") == null) {
        userlist = [];
    }
    else {
        userlist = JSON.parse(localStorage.getItem("users"));
    }

    let confirm = window.confirm("Are you sure to delete?");

    if (confirm) {
        userlist.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(userlist));
        showdata();
    }
    else {

    }

}

function updatedata(index) {
    console.log("update data" + index);

    document.getElementById("UpdateBtn").style.display = "block";
    document.getElementById("SubmitBtn").style.display = "none";
    var userlist;
    if (localStorage.getItem("users") == null) {
        userlist = [];
    }
    else {
        userlist = JSON.parse(localStorage.getItem("users"));
    }

    let confirm = window.confirm("Are you sure to update?");
    if (confirm) {
        document.getElementById("uname").value = userlist[index].username;
        document.getElementById("uemail").value = userlist[index].email;
        document.getElementById("umsg").value = userlist[index].msg;
        document.getElementById("uage").value = userlist[index].age;

        document.getElementById("UpdateBtn").addEventListener("click", () => {
            console.log("update button is clicked!");
            userlist[index].username = document.getElementById("uname").value;
            userlist[index].email = document.getElementById("uemail").value;
            userlist[index].msg = document.getElementById("umsg").value;
            userlist[index].age = document.getElementById("uage").value;

            if ((validateEmail(userlist[index].email))) {
                localStorage.setItem("users", JSON.stringify(userlist));
                showdata();

                document.getElementById("UpdateBtn").style.display = "none";
                document.getElementById("SubmitBtn").style.display = "block";

                document.getElementById("uname").value = "";
                document.getElementById("uemail").value = "";
                document.getElementById("umsg").value = "";
                document.getElementById("uage").value = "";

            }



        })
    }




}

function search(){
	// console.log("search is work!");
	let filter=document.getElementById("searchinput").value.toUpperCase();
	// console.log(filter);
	let mytable=document.getElementById("mytable");

	let tr=mytable.getElementsByTagName("tr");

	for(var i=0;i<tr.length;i++){
		let td=tr[i].getElementsByTagName("td")[1];
		if(td){
			let textvalue=td.textContent || td.innerHTML;
			//if this textvalue and enterd search input is matched then show that data otherwise not
			if(textvalue.toUpperCase().indexOf(filter)> -1){
              //here match value's position is here 
			  tr[i].style.display="";
			}
			else{
				tr[i].style.display="none";
			}
		}
	}

}












