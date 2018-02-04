function smallScreenRedirectIfNeeded() {
	if(($(window).width() < 1300)) {
		window.location="small-screen.html";
	}
}

$(document).ready(function () {
	initializeScrolling();
	smallScreenRedirectIfNeeded();
	window.addEventListener("resize", smallScreenRedirectIfNeeded);
});