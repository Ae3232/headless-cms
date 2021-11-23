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