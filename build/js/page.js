$(document).ready(function() {

	/* scroll animation using scrollreveal */
	window.sr = ScrollReveal({reset:true});
	sr.reveal('.skills-animate',{
		origin: 'bottom',
		distance: '40px',
		duration:500,
		scale: 0.8,
		easing: 'linear',
		mobile: true,
		reset: false // true:  reveals occur every time elements become visible

	});

	sr.reveal('.animate-image',{
		duration:1000,
		scale: 0.8,
		easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
		reset: false
	},50); /* scroll reveal ends here */

	/* Navigation */
	var navTop = $(".navigation").offset().top;
	var skillsTop = $(".skills").offset().top;
	var portfolioTop = $(".portfolio").offset().top;
	var contactTop = $(".footer").offset().top;

	var navHeight = $(".navigation").offset().top + $(".navigation").outerHeight(true);
	var portfolioHeight = $(".portfolio").offset().top + $(".portfolio").outerHeight(true);
	var skillsHeight = $(".skills").offset().top + $(".skills").outerHeight(true);
	var contactHeight = $(".footer").offset().top + $(".footer").outerHeight(true);

	/* take navbar height to maintain it when it is fixed! and cut away */
	var navbarHeight = $(".navbar").offset().top + $(".navbar").outerHeight(true);

	/* on scroll event */
	$(document).scroll(function(e) {
		
		if ($(document).scrollTop() >= 80) {

			/* display scroll-to-top arrow */
			$('.arrow-up').css('display','block');

			/* make navbar fixed on scroll */
			$(".navbar").css({
				'background-color':'rgba(0,0,0,0.4)',
				'position': 'fixed',
				'top': '0',
				'width': '100%',
				'left': '0',
				'z-index':'5',
				'padding-left':'45px',
				'padding-right':'40px',
			    '-webkit-transition': 'background-color 500ms linear',
			    '-ms-transition': 'background-color 500ms linear',
			    'transition': 'background-color 500ms linear'
			});
			$('.show-on-fix').css({
				'display':"block",
				'height':navbarHeight+'px'
			});
			/* animation in navbar appear */
			$('.navbar').addClass('animated fadeInDown');

		}else{

			/* hide scroll-to-top arrow */
			$('.arrow-up').css('display','none');

			/* remove navbar fixed and bg color */
			$(".navbar").css({
				'position': 'relative',
				'background-color':''
			});	

			/* hide div which prevent element move due to nav-fixed*/
			$('.show-on-fix').css({
				'display':"none"
			});

			/*hide animation and navbar fix itself */
			$('.navbar').removeClass('animated fadeInDown');		
		}

		/* change navigation active class on scroll */
		var scrollHeight = ($(document).scrollTop());

		if (scrollHeight >= navTop && scrollHeight < navHeight-150) {
			$(".home").addClass('active');

			$(".skills-nav").removeClass('active');
			$(".portfolio-nav").removeClass('active');
			$(".contact-nav").removeClass('active');

		}
		if (scrollHeight >= navHeight-150 && scrollHeight < skillsHeight-150) {
			$(".skills-nav").addClass('active');

			$(".home").removeClass('active');
			$(".portfolio-nav").removeClass('active');
			$(".contact-nav").removeClass('active');
		}
		if (scrollHeight >= skillsHeight-150 && scrollHeight < portfolioHeight-150) {
			$(".portfolio-nav").addClass('active');

			$(".home").removeClass('active');
			$(".skills-nav").removeClass('active');
			$(".contact-nav").removeClass('active');
		}
		if (scrollHeight >= portfolioHeight-100 && scrollHeight < contactHeight) {
			$(".contact-nav").addClass('active');

			$(".home").removeClass('active');
			$(".portfolio-nav").removeClass('active');
			$(".skills-nav").removeClass('active');
		}
		e.preventDefault();
	}); /* end scroll event & navigation */
	
	/* arrow up click : move to top of document */
	$(".arrow-up").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});

	/* .navbar-toggle on small devices : onclick */
	$(".navbar-toggle ").click(function(){
		$('#myNavbar').css({
			'height':'100vh !important'
		});
	});

	/*navbar link click */
	$('.home').click(function(e){
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		e.preventDefault();
	});
	$('.skills-nav').click(function(e){
		$("html, body").animate({
			scrollTop: skillsTop
		}, "slow");
		e.preventDefault();	
	});
	$('.portfolio-nav').click(function(e){
		$("html, body").animate({
			scrollTop: portfolioTop
		}, "slow");
		e.preventDefault();	
	});
	$('.contact-nav').click(function(e){
		$("html, body").animate({
			scrollTop: contactTop
		}, "slow");
		e.preventDefault();	
	});

		
});

