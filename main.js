$(document).ready(function() {
		var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});
});

$(document).ready(function() {
	controller.addTween('#fade', 
		TweenMax.from($('#fade'),
		.5,
		{css:{opacity:0}}),
		0, // scroll duration of tween (0 means autoplay)
    	200); // offset the start of the tween by 200 pixels
});
