const userContainer = document.getElementById("container");
const button = document.querySelector("#btn");
const bookTitle = document.querySelector("#input1");
const authorTitle = document.querySelector("#input2");
const isbnTitle = document.querySelector("#input3");  
const form = document.querySelector("#form");  
const errorElement = document.querySelector("#error")           
  
  let books = []

	let operate_func = () => {
    
		let obj = {
			
		  bookTitle: document.getElementById("input1").value,
		  authorTitle: document.getElementById("input2").value,
		  isbnTitle: document.getElementById("input3").value

		}



  	
	
	if(obj.bookTitle=="" || obj.authorTitle=="" || obj.isbnTitle == ''){
		errorElement.innerHTML="Field cannot be Empty";
	 return ;
	}
	
		books.push(obj)

			userContainer.innerHTML += "<tr id=come>" + "<td>" + obj.bookTitle + "</td>"+ "<td>" + obj.authorTitle  + "</td>" +  "<td>" + obj.isbnTitle + "</td>" + "<td>" + "<button class=javascript_button>" + "X" +  "</button>" + "</td>" + "</tr>"

  document.getElementById("input1").value = "";
  	document.getElementById("input2").value = "";
   	document.getElementById("input3").value = "";
}
	
	setTimeout(() => {
		errorElement.remove()
	}, 2000)


button.addEventListener('click', operate_func)




userContainer.addEventListener('click', function(e){	

	let target = e.target ;

	 if(target.classList.contains('javascript_button')){    

	 	document.getElementById("come").remove();
                     
		   	}
})

button.addEventListener('click', operate_func);
			






