$(document).ready(function() {
		var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});
});

$(document).ready(function() {
	controller.addTween('#fade', 
	    TweenMax.from($('#fade'), .5, {css:{opacity:0}}));
});