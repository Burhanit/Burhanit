

	$(document).ready(function(){
	  $(".slider_area").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:false,
		autoplay:true,
		items:1,
		dots:false,
		animateIn:'fadeIn',
		animateOut:'fadeOut'
	
	  });
	  
	  $(".slide_article").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:true,
		autoplay:true,
		items:3,
		dots:false,
		navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
	  });
	  
	 $(".client_slider").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:true,
		autoplay:true,
		items:6,
		dots:false,
		navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
	  });
	  
	 $(".quote_area").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:false,
		autoplay:true,
		items:1,
		dots:false,
		rtl:true,
	  });
	 
	 $(".gray_area").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:false,
		autoplay:true,
		items:3,
		dots:false,
	  });
	
	$(".dialog_slide").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:false,
		autoplay:true,
		items:1,
		dots:false,
		rtl:true,
	  });
	$(".port_slide").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:false,
		autoplay:true,
		items:3,
		dots:true,
	  });
	  
	 $(window).scroll(function(){
			
			if($(window).scrollTop() >= 50){
				$('.header').addClass('fixed-manu');
			}else{
				$('.header').removeClass('fixed-manu');
			}
			
		}); 
	new WOW().init();
	  
	});	
	
	
	
		