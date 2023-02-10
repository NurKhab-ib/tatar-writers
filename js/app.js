//? scroll-top button
$(function () {
    $('#scroll-top').hide();
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll-top').show();
		} else {
			$('#scroll-top').hide();
		}
	});
 
	$('#scroll-top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});	

//? links 
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);	
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			if (burgerMenu.classList.contains('active')) {
				document.body.classList.remove('lock');
				burgerMenu.classList.remove('active');
				menuBody.classList.remove('active');
			} 

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}