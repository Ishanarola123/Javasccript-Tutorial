document.getElementById('GetData').addEventListener("click", makerequest);

function makerequest() {
    // console.log("button is click for getting json data");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status === 200) {
            // console.log(xhr.response);
            const arr = xhr.response;
            // console.log(arr);
            placeholder= document.querySelector("#jsondata");
            let out = "";
            arr.map((value, index) => {
                out += `
        <tr>
            <td>${index}</td>
            <td>${value.name}</td>          
            <td>${value.course}</td>
            <td>${value.field}</td>
        </tr>
    `;
              
            })
            placeholder.innerHTML=out;
        }
        else {
            console.log("Problem Occured");
        }
    }

    xhr.send();
}