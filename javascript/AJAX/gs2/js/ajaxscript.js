document.getElementById("btnajax").addEventListener("click", makerequest);
// function makerequest(){
//     console.log("button clicked!");
// //read data from AJAx
// const xhr=new XMLHttpRequest();
// //when click on submit button then page is not reload 
// xhr.open("GET","data.txt",true)
// //handle response
// xhr.onreadystatechange= function(){
//     //various ready state in this XML request
//     console.log("readyState",xhr.readyState);
//     if(xhr.readyState===XMLHttpRequest.DONE){
//         if(xhr.status===200){
//            console.log(xhr);
//            console.log(xhr.responseText);
//            document.getElementById("data").innerHTML=xhr.responseText;
//         }
//         else{
//             console.log("problem occured");
//         }
//     }
// };
// xhr.send();


// }


function makerequest() {


    const xhr = new XMLHttpRequest();

    if (xhr.readyState === 0) {
        console.log("open method is not yet called 0");
    }

    xhr.open("GET", "data.txt", true)

    if (xhr.readyState === 1) {
        console.log("open method called 1  ")
    }

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 2) {
            console.log("Resonse Header 2");
        }
        if (xhr.readyState === 3) {
            console.log("Loading... 3 ");
        }

        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);
                document.getElementById("data").innerHTML = xhr.responseText;
            }
            else {
                console.log("problem occured");
            }
        }
    };
    xhr.send();


}