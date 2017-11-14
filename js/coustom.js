
	//For Carousel
	$(document).ready(function(){
	  $(".slaider").owlCarousel({
		loop:true,
		mouseDrag:false,
		nav:false,
		autoplay:true,
		items:1,
		dots:false,
		animateIn:'fadeIn',
		animateOut:'fadeOut',
	
	  });
	  
	   domready(function(){
				selectnav('nav', {
			label: 'Select Menu'
		});
		prettyPrint()
			})
			
			new WOW().init()	
			
			
	});
	
	//For Map
		
		var map = new GMaps({
      el: '#map',
      lat: 23.1519997,
      lng: 89.2039284,
    });
	
	//For Scroll top
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('.scrollup').fadeIn();
		}else{
			$('.scrollup').fadeOut();
		};
	});

	$('.scrollup').click(function(){
		$("html, body").animate({
			scrollTop: 0
		},  2000);
		return false;
	});
	
		//Preload
		$(window).on('load', function() { 
			$('#status').fadeOut();  
            $('#preloader').delay(350).fadeOut('slow'); 
            $('body').delay(350).css({'overflow':'visible'});
		})
	
	
  
	



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	