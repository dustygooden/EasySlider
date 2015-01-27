window.addEventListener("load", setup(), false)

function setup(){
	document.onclick = function(e) {
		if(e.target != document.getElementById('sideButton') && e.target != document.getElementById('sideContent')) {
			closeOnly();
			return
		} else {
			
		}
	}
}

function changeClass(){
	var currentClass = document.getElementById("sideContent").className;
	
	if (currentClass == 'closed'){
		document.getElementById("sideContent").className = "open";
	}
	else if (currentClass == 'open'){
		document.getElementById("sideContent").className = "closed";
	}
	else {
		alert('Object has unknown class!');
	}
}

function closeOnly(){
	var currentClass = document.getElementById("sideContent").className;
	if (currentClass == 'open'){
		document.getElementById("sideContent").className = "closed";
	}
	else{
	}
}
