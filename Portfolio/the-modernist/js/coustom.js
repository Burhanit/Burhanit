

	$(document).ready(function(){
	  $(".my_slider").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:true,
		autoplay:true,
		items:1,
		navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		dots:true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
	  });
	});
		