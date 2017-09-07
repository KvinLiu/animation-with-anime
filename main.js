// anime({
// 	targets: 'div.red',
// 	translateY: [
// 		{ value: 100, duration: 500},
// 		{ value: 0, duration: 800}
// 	],
// 	rotate: {
// 		value: '1turn',
// 		easing: 'easeInOutSine'
// 	}
// });
//
// anime({
// 	targets: 'div.blue',
// 	translateY: [
// 		{ value: 100, duration: 500, delay: 1000},
// 		{ value: 0, duration: 800}
// 	],
// 	rotate: {
// 		value: '1turn',
// 		easing: 'easeInOutSine',
// 		delay: 1000
// 	}
// });
//
// anime({
// 	targets: 'div.green',
// 	translateY: [
// 		{ value: 100, duration: 500, delay: 2000},
// 		{ value: 0, duration: 800}
// 	],
// 	rotate: {
// 		value: '1turn',
// 		easing: 'easeInOutSine',
// 		delay: 2000
// 	}
// });
//
//
// anime({
// 	targets: 'div.yellow',
// 	translateY: [
// 		{ value: 100, duration: 500, delay: 3000},
// 		{ value: 0, duration: 800}
// 	],
// 	rotate: {
// 		value: '1turn',
// 		easing: 'easeInOutSine',
// 		delay: 3000
// 	}
// });

anime({
	targets: 'div.box',
	translateY: [
		{ value: 200, duration: 500 },
		{ value: 0, duration: 800}
	],
	rotate: {
		value: '1turn',
		easing: 'easeInOutSine'
	},
	delay: function(el, i, l) {
		return i * 1000;
	}

});

