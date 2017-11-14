

	$(document).ready(function(){
	  $(".slider").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:false,
		autoplay:true,
		items:1,
		dots:true,
	
	  });
 
	});
	
	$(document).ready(function(){
	  $(".pr_slider").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:false,
		autoplay:true,
		items:1,
		dots:true,
	
	  });
	  
		$(window).scroll(function(){
			
			if($(window).scrollTop() >= 50){
				$('.header').addClass('fixed-manu');
			}else{
				$('.header').removeClass('fixed-manu');
			}
			
		});
	  
	});
	


	var map = new GMaps({
      el: '#map',
      lat: 23.6650095,
      lng: 89.3024218,
    });	
	
	
	
	