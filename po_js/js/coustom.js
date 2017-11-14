
$(document).ready(function(){
  
	
//mixitup
     var mixer = mixitup('.mixitup');
    
    var mixer = mixitup(containerEl);
    
    var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 1000
    }	
	
});

});


		$(window).on('load', function() { 
			$('#status').fadeOut();  
            $('#preloader').delay(350).fadeOut('slow'); 
            $('body').delay(350).css({'overflow':'visible'});
		})
	



















		