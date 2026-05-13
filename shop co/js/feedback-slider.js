export const feedbackSlider = () => {
	new Swiper(".feedback__slider", {
		slidesPerView: "auto",
		centeredSlides: false,
		spaceBetween: 20,
		loop: true,
		mousewheel: { forceToAxis: true },
		navigation: {
			prevEl: ".feedback__slider-button--prev",
			nextEl: ".feedback__slider-button--next",
		},
	});
};
