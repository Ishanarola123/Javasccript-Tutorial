console.log("hello");
document.getElementById("btn").addEventListener("click", makerequest);

function makerequest(){
    console.log("you click on the button");
    
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
	if(!response.ok){
		throw Error(response.statusText);
	}
	else{
		return response.json();
	}

}
).then((data)=>{
let out = "";
data.map((value,index) => {
    let placeholder = document.querySelector("#data");
		out += `
			<tr>
			     <td>${index}</td>
				<td>${value.userId}</td>
				<td>${value.id}</td>
				<td>${value.title}</td>
				<td>${value.body}</td>
			</tr>
		`;
	placeholder.innerHTML = out;
	
  });
  
}).catch((err)=>{console.log(err)})

}