console.log("hello");
// document.getElementById("btn").addEventListener("click", makerequest);
//with error handlling
document.onload=makerequest();
async function makerequest() {
    try {
        console.log("button clicked");
        const res = await fetch("data.json");
        console.log(res);
        if (!res.ok) {
            throw Error(res.statusText)
        }
        const data = await res.json();
        console.log(data);
        //here data in json object so we need to convert into string 
        //showning data in 
        //use map method to fetch data in loop
    
       let out = "";
       data.map((value,index)=>{
    
    
       
        out += `
        <tr>
            <td>${index}</td>
            <td>${value.name}</td>          
            <td>${value.course}</td>
            <td>${value.field}</td>
          
        </tr>
    `;
    document.querySelector("#data").innerHTML= out;
    
   
       })

      
    } catch (error) {
        console.log(error);
    }
}

   
