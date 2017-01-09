$( document ).ready(function() {
    
    //sticky header
    $(window).on("scroll", function() {
        console.log('scrolled');
        var fromTop = $("body").scrollTop();
        if(fromTop > $(".site-header").height) {
            $(".site-header").addClass("sticky");
        } else {
            $(".site-header").removeClass("sticky");
        }
    });


    //menu icon for mobile
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