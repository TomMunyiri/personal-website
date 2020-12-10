const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "java",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "android",
				weight: 14
			}, {
				text: "jquery",
				weight: 5
			}, {
				text: "html5",
				weight: 7
			}, {
				text: "kotlin",
				weight: 10
			}, {
				text: "django",
				weight: 9
			}, {
				text: "python",
				weight: 15
			}, {
				text: "javascript",
				weight: 8
			}, {
				text: "php",
				weight: 8
			}, {
				text: "bootstrap",
				weight: 7
			}, {
				text: "postgres",
				weight: 7
			}, {
				text: "mysql",
				weight: 7
			}, {
				text: "sqlite",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Software Developer.", "love everything about code.", "solve problems.", "also design websites", "build Android and Django apps"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
