document.getElementById("btnajaxload").addEventListener("click", makerequest);

function makerequest(){
    console.log("btn clicked on load")

    const xhr = new XMLHttpRequest();
    xhr.open("GET" ,"data.txt",true);
   
    xhr.onload=() =>     {
        if(xhr.status === 200){
            console.log(xhr);
            document.getElementById("data2").innerHTML= xhr.responseText;
            console.log(xhr.responseText);
        }
        else{
            console.log("Problem Occured");
        }
    }
//all are asynchronous 
    xhr.onprogress = (e)=>{
        console.log(e.loaded);
        console.log(e.total);
    };
    xhr.onerror = ()=>{
       console.log("network not available")
    };
    xhr.onloadstart= ()=>{
        console.log("transaction has started");
     };
     xhr.onloadend = ()=>{
        console.log("Transcation has end");
     };
     xhr.onabort =()=>{
        console.log("Abort!");
     };


    xhr.send();
}