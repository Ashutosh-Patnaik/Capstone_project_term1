var myQuestions = [
	{
		question: "Q1.  People usually choose to live in areas with?",
		answers: {
			a: 'plentiful water',
			b: 'favourable climate',
            c: 'good land',
            d: 'All of these'
		},
		correctAnswer: 'd'
	},
	{
		question: "Q2.  What experimentation was done in India to stop population growth?",
		answers: {
			a: 'mass vasectomy',
			b: 'Abortions',
            c: 'One child rule',
            d: 'Immigration rule'
		},
		correctAnswer: 'a'
    },
    {
		question: "Q3.  What is the approximate population of the world?",
		answers: {
			a: '6.3 million',
			b: '6.8 billion',
            c: '7.1 billion',
            d: '7.9 million'
		},
		correctAnswer: 'c'
	},
	{
		question: "Q4.  What is the current population of India?",
		answers: {
			a: '1.3 billion',
			b: '3.2 billion',
            c: '1.8 billion',
            d: '980 million'
		},
		correctAnswer: 'a'
	},
	{
		question: " Q5.  Which of the following is an effect of overpopulation?",
		answers: {
			a: 'Social Marketing',
			b: 'abortion',
            c: 'immigration',
            d: 'Deforestation'
		},
		correctAnswer: 'd'
	},
	{
		question: "Q6.  By how much did the population of USA increase form 2020-21 ?",
		answers: {
			a: '1.37%',
			b: '5.22%',
            c: '0.58%',
            d: '0.96%'
		},
		correctAnswer: 'c'
	},
	{
		question: "Q7.  Which is the most populated state in the USA?",
		answers: {
			a: 'Texas',
			b: 'Florida',
            c: 'California',
            d: 'New York'
		},
		correctAnswer: 'c'
	},
	{
		question: "Q8.  Which is the least populated state in India?",
		answers: {
			a: 'Sikkim',
			b: 'Nagaland',
            c: 'Manipur',
            d: 'Jammu and Kashmir'
		},
		correctAnswer: 'a'
	},
	{
		question: "Q9.  What position does North Korea rank in largest military?",
		answers: {
			a: '3rd',
			b: '4th',
            c: '7th',
            d: '2nd'
		},
		correctAnswer: 'b'
	},
	{
		question: "Q10.  Who is the most powerful person on Earth?",
		answers: {
			a: 'Donald Trump',
			b: 'Jeff Bezos',
            c: 'Bill Gates',
            d: 'Vladimir Putin'
		},
		correctAnswer: 'd'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// a place to store the output and the answer choices//
		var output = [];
		var answers;

		// for each question...//
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers//
			answers = [];

			// for each available answer...//
			for(letter in questions[i].answers){

				// ...add a html radio button//
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+" "
						+ questions[i].answers[letter]
					+ '</label><br>'
				);
			}

			// add this question and its answers to the output//
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page//
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz//
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers//
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...//
		for(var i=0; i<questions.length; i++){

			// find selected answer//
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct//
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers//
				numCorrect++;
				
				// color the answers green//
				answerContainers[i].style.color = 'green';
			}
			// if answer is wrong or blank//
			else{
				// color the answers red//
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total//
		resultsContainer.innerHTML = 'You have scored ' + numCorrect + ' out of ' + questions.length;
	}

	// show questions right away//
	showQuestions(questions, quizContainer);
	
	// on submit, show results//
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}
