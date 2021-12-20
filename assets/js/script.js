(() => {
	document.addEventListener('DOMContentLoaded', () => {
		const btnToolTip = document.querySelector('.header__sandwich');
		const toolTipBtnClose = document.querySelector('.icon-close');
		const navDropDown = document.querySelector('.navigation');
		const overlay = document.querySelector('.overlay');

		btnToolTip.addEventListener('click', e => {
			navDropDown.classList.toggle('_open');
			overlay.classList.toggle('_open');
		});
		toolTipBtnClose.addEventListener('click', e => {
			navDropDown.classList.remove('_open');
			overlay.classList.remove('_open');
		});
	});
})();

$(document).ready(function() {
	if ($('.sidebar__sublist').is(':empty')) {
		$this = $(this);
	}
	$(".sidebar__link").click(function() {
		$this = $(this);
		$this.next().slideToggle("fast");
		$this.toggleClass('close');
		if ($this.next().length >= 0) {
			$this.addClass('has-li');
		}
	});
	$(".sidebar__sublist-link").click(function() {
		$this = $(this);
		$this.next().slideToggle("fast");
		$this.toggleClass('close');
	});
});
$(document).ready(function() {
	$(".slider-wrapper").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});