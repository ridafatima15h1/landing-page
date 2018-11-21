///////////////////////////////////////////////////
///////////////#NAVBAR_COLLAPSE_BUTTON/////////////
///////////////////////////////////////////////////

var collapse_btn = document.getElementById("collapse-btn");
var x = 0;
collapse_btn.onclick = function() {
		collapseFunction(); 
}

function collapseFunction() {
	if(x === 0) {
		document.getElementById("collapse-btn").classList.add("collapse-navbar");
		document.getElementById("features-btn").classList.add("collapse-navbar");
		document.getElementById("security-btn").classList.add("collapse-navbar");
		document.getElementById("pricing-btn").classList.add("collapse-navbar");
		document.getElementById("sign-up-btn").classList.add("collapse-navbar");
		x = 1;
	} else if(x === 1) {
		document.getElementById("collapse-btn").classList.remove("collapse-navbar");
		document.getElementById("features-btn").classList.remove("collapse-navbar");
		document.getElementById("security-btn").classList.remove("collapse-navbar");
		document.getElementById("pricing-btn").classList.remove("collapse-navbar");
		document.getElementById("sign-up-btn").classList.remove("collapse-navbar");
		x = 0;
	}
}

////////////////////////////////////////////////////
