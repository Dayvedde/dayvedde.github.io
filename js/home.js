$(document).ready(function(){
	$('.skills-header').click(function() {
		var contentHeight = $(this).next('.collapsible-body').height();
		var skillsBgHeight = $('.skills-bg-image').height();
		var newHeight = !$(this).hasClass('active')
			? skillsBgHeight + contentHeight 
			: skillsBgHeight - contentHeight;
			
		$('.skills-bg-image').animate({"height": newHeight}, 500);
	})
})
