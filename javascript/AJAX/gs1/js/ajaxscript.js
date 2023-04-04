document.getElementById("btnajax").addEventListener("click",makerequest);
function makerequest(){
    console.log("button clicked!");
    //read data from AJAx
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.txt",true)
    //handle response
    xhr.onreadystatechange= function(){
        if(xhr.readyState===XMLHttpRequest.DONE){
            if(xhr.status===200){
               console.log(xhr);
               console.log(xhr.responseText);
               document.getElementById("data").innerHTML=xhr.responseText;
            }
            else{
                console.log("problem occured");
            }
        }
    };
    xhr.send();
   
}