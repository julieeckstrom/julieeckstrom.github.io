$( document ).ready(function() {
    
    $(".site-nav").click(function() {
		if (window.innerWidth < 550) {
			if (!($(".menu-icon").hasClass("invisible"))) {
				$(".menu-icon").addClass("invisible");
    			$(".close-icon").addClass("visible");
    			$(".trigger").addClass("open");

    			$('.path').each(function () {
    				$(this).attr('transform', 'translate(100, 0)');
				});

			} else {
				$(".menu-icon").removeClass("invisible");
    			$(".close-icon").removeClass("visible");
    			$(".trigger").removeClass("open");
			}
    	}
    });

});