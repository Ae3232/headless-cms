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
	$(".sidebar__item").click(function() {
		$this = $(this);
		$this.children().next().slideToggle("fast");
	});
	$(".sidebar__sublist-item").click(function() {
		$this = $(this);
		$this.children().next().slideToggle("fast");
	});
});