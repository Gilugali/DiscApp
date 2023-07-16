const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


/*
 @The Search button triggering 
 @The searching through for someone

 */
// alert('justin')
const searchPermission = document.querySelector('#searchPermission');
const inputValue = document.querySelector('.searchBox')
if(searchPermission){
	searchPermission.addEventListener('click', ()=>{


    //activating the search input
	// inputValue.style.display = "block"

	// inputValue.style.borderBottom ="1px solid #3C91E6"
	// inputValue.style.transition ="0.6 ease in"

		//Searchin algorithm

		let filter = inputValue.ariaValueMax.toUpperCase()
       for(let i =0; i<tr.length; i++){
		let td = tr[i].getElementsByTagName('td')[0]

		if(td){
			let txt= td.textContent ||td.innerText
			if(txt.toUpperCase().indexOf(filter) > -1){
				tr[i].style.display=""
			}else{
				tr[i].style.display ='none'
			}
		}
	   }
		// tr.addEventListener('click', ()=>{
		// 	alert('justin')
		// })

		
///ai recognition voice present
  
	 
	 




	

})
}

// alert('justin')
//Selecting the data rows according to students

const tableRow = document.querySelector('.table-permission')
if(tableRow){
tableRow.addEventListener('click',()=>{
	const onPermission = document.querySelector("#on")
  const main = document.querySelector('.main')
  main.classList.add('main') 
//   main.style.background = 'black'
//   main.style.filter = 'blur(0px)'

//   onPermission.style.display ='block'
  const permissionContainer = document.querySelector('.container')
  permissionContainer.style.display ='block'
  
})
}
const closePermission = document.querySelector('.close')
if(closePermission){
closePermission.addEventListener('click', ()=>{
	// main.style.filter = 'blur(0px)'
	permissionContainer.style.display = 'none'
	// main.classList.add('remove')
	main.style.filter = 'blur(0px)'
	
	
})
}

// const page = document.querySelector('#page')
// page.addEventListener('click', ()=>{
// 	onPermission.style.display ='none'
// 	main.style.filter = 'blur(0px)'
	
// })


// printing button on the permission page
const permissionContainer = document.querySelector('.container')
const printBtn = document.querySelector('.print')
if(printBtn){
printBtn.addEventListener('click', ()=>{
	print()
})
}



//getting the date of today
function getTheDate(){
const date = new Date()

}
getTheDate()


/////////////////////////////////////////////////////////////////////////////////////////
function myFunction() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
 
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		console.log(filter.indexOf(i))
	  td = tr[i].getElementsByTagName("td")[0];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > 0) {
	

		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }
	}
  }
  
