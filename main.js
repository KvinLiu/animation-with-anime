anime({
	targets: 'div.red',
	translateY: [
		{ value: 100, duration: 500},
		{ value: 0, duration: 800}
	],
	rotate: {
		value: '1turn',
		easing: 'easeInOutSine'
	}
});

anime({
	targets: 'div.blue',
	translateY: [
		{ value: 100, duration: 500, delay: 1000},
		{ value: 0, duration: 800}
	],
	rotate: {
		value: '1turn',
		easing: 'easeInOutSine',
		delay: 1000
	}
});
