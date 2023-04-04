// document.getElementById("btn").addEventListener("click", () => {
//     console.log("btn clicked!");
//     const promise = fetch("file.txt");
//     console.log(promise);
//     promise.then((res) => {
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }
//         return res.text()
//     }).
//         then((data) => { 
//             console.log(data);
//             document.getElementById("data").innerText=data;
//         }).catch((error) => {
//             console.log(error)
//         });
//     //here first promise return res again fetch data from it returns promise and then we get data 

// })

//async await funciton

document.getElementById("btn").addEventListener("click", makerequest);

// async function makerequest(){
//     console.log("button clicked");
//     const res=await fetch("file.txt");
//     console.log(res);
//     const data=await res.text();
//     console.log(data);

// }

//with error handlling
async function makerequest() {
    try {
        console.log("button clicked");
        const res = await fetch("file.txt");
        console.log(res);
        if (!res.ok) {
            throw Error(res.statusText)
        }
        const data = await res.text();
        console.log(data);
        //showning data in browser
        document.getElementById("data").innerText=data;
    } catch (error) {
        console.log(error);
    }
}