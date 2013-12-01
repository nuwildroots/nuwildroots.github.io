$(document).ready(function() {
		var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});
});

	controller.addTween('#fade', 
	    TweenMax.from($('#fade'), .5, {css:{opacity:0}}));

