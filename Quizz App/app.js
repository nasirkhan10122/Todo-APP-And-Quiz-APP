var questions = [{
	"question": "What is the hottest continent on Earth?",
	"option1": "Asia",
	"option2": "Africa",
	"option3": "South America",
	"option4": "Europe",
	"answer": "2"
}, {
	"question": "What is the capital of Chile?",
	"option1": "Ankara",
	"option2": "Moscow",
	"option3": "Santiago",
	"option4": "Jakarta",
	"answer": "3"
}, {
    "question":"What is the smallest country in the world?",
    "option1": "Srilanka",
    "option2": "Vatican City",
    "option3": "Azerbaijan",
    "option4": "Canada",
    "answer" : "2"
 },{
    "question":"What is the largest country in the world?",
    "option1": "China",
    "option2": "Russia",
    "option3": "USA",
    "option4": "India",
    "answer" : "2"
 },{
    "question":"What is the longest river in the world?",
    "option1": "River Indus",
    "option2": "River Amazon",
    "option3": "River Nile",
    "option4": "River Mississippi",
    "answer" : "3"
 },{
    "question":"What are the five colours of the Olympic rings?",
    "option1": "Yellow Green Black Blue and White ",
    "option2": "Yellow Red Black Blue and Green",
    "option3": "Blue Yellow Black White and Silver",
    "option4": "Blue Yellow Black Green and Red",
    "answer" : "4"
 },{
    "question":"How many players are there in a rugby league team?",
    "option1": "10",
    "option2": "8",
    "option3": "12",
    "option4": "13",
    "answer" : "4"
 },{
    "question":"How many countries still have the shilling as currency?",
    "option1": "Two",
    "option2": "Four",
    "option3": " Five",
    "option4": "One",
    "answer" : "2"
 },{
    "question":" Which is the only vowel not used as the first letter in a US State?",
    "option1": "I",
    "option2": "E",
    "option3": "U",
    "option4": "O",
    "answer" : "2"
 },{
    "question":"Which from the following is NOT a conductor?",
    "option1": "Aluminium",
    "option2": "Silicon",
    "option3": " Graphite",
    "option4": "All are conductors",
    "answer" : "4"
}];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);