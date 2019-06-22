var questionElm = document.querySelector('.question');
var answerElm = document.querySelector('.answer');
var next = parseInt(Math.random() * 1e2);

questionElm.addEventListener('swipeup', function (event) {
	console.log('swipeup')
	questionElm.classList.add('animate', 'hide');
}, false);

var nextQuestion = function () {
	answerElm.addEventListener('transitionend', function (event) {
		history.pushState({ question: next }, 'Adivinhações: Pergunta #' + next, '#' + next);
		document.title = 'Adivinhações: Pergunta #' + next, '#' + next;

		questionElm.classList.remove('animate', 'hide');
		questionElm.classList.add('opacityZero');
		answerElm.classList.remove('animate', 'hide');

		questionElm.innerHTML = '<p>O que uma impressora disse para a outra?</p>';
		answerElm.innerHTML = '<p>Essa folha é minha ou é impressão sua?</p>';

		setTimeout(function () {
			questionElm.classList.add('animate', 'show');

			setTimeout(function () {
				questionElm.addEventListener('animationend', function (event) {
					questionElm.classList.remove('animate', 'show', 'opacityZero');
				}, { once: true });
			}, 10);
		}, 10);

	}, { once: true, useCapture: false });

	answerElm.classList.add('animate', 'hide');
};

answerElm.addEventListener('tap', function (event) {
	console.log('tap');
	nextQuestion();
}, false);

answerElm.addEventListener('swipeleft', function (event) {
	console.log('swipeleft');
	nextQuestion();
}, false);

answerElm.addEventListener('click', function (event) {
	console.log('click');
	nextQuestion();
}, false);

