
fetch("products.json")
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
    let placeholder = document.querySelector("#data-output");
		out += `
			<tr>
			     <td>${index}</td>
				<td> <img src='${value.image}'> </td>
				<td>${value.name}</td>
				<td>${value.price}</td>
				<td>${value.inventory}</td>
				<td>${value.productCode}</td>
				<td>${value.price* value.inventory}</td>
				
			</tr>
		`;
	placeholder.innerHTML = out;
	
  });
  
}).catch((err)=>{console.log(err)})

function search(){
	// console.log("search is work!");
	let filter=document.getElementById("searchinput").value.toUpperCase();
	// console.log(filter);
	let mytable=document.getElementById("mytable");

	let tr=mytable.getElementsByTagName("tr");

	for(var i=0;i<tr.length;i++){
		let td=tr[i].getElementsByTagName("td")[2];
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