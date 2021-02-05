const bookClick = document.querySelector('.bookImage')
bookClick.addEventListener('click', () => {
	onClick = window.location = src = "workshop/workshop.html";
})

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
	if (!e.target.matches('.drop')) {
		var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}
