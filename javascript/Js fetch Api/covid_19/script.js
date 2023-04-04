fetch("https://api.covid19api.com/summary")
.then(function(response){
	if(!response.ok){
		throw Error(response.statusText);
	}
	else{
		return response.json();
	}

}
).then((data)=>{
// console.log(data);
const arr=data.Countries;
// console.log(arr);
let out = "";


arr.map((value,index) => {
    let placeholder = document.querySelector("#data");
		out += `
			<tr>
			     <td>${index}</td>
		         <td>${value.Country}</td>
				 <td>${value.Date}</td>
				 <td>${value.NewConfirmed}</td>
				 <td>${value.NewDeaths}</td>
				 <td>${value.TotalConfirmed}</td>
				 <td>${value.TotalDeaths}</td>
				 <td>${value.TotalRecovered}</td>
				
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

