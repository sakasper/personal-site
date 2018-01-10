var controller = new ScrollMagic.Controller();
var scrollDuration = 750;

function addSmoothScrolling () {
	controller.scrollTo(function (target, params) {
		var duration = params.duration;
		var animateSkillSection = params.animateSkills;
		var adjustedTarget = 0;
		if(target != 0) {
			adjustedTarget = target - 65;
		}
		$('html,body').animate({scrollTop : adjustedTarget}, duration);
		if(animateSkillSection){
			animateSkills();
		}
	});

	$('a').each(function (i, elem) {
		var target = elem.hash;
		elem.onclick = function (event) {
			if(target !== "") {
				event.preventDefault();
				var animateSkills = (target == "#skills");
				var params = {
					duration: scrollDuration,
					animateSkills: animateSkills
				};
				controller.scrollTo(target, params);
			}
		}
	});
}

function addNavFade () {
	var navbarScrollFade = new ScrollMagic.Scene({
		triggerElement: "#skills",
		triggerHook: "onEnter",
		offset: 20,
	})
	.setClassToggle("#nav", "scrolled")
	.addTo(controller);
}

function initializeScrolling () {
	addNavFade();
	addSmoothScrolling();
}