var questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Multiple Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language",
    ],
  },

  {
    question: "What is CSS used for?",
    answer: "Style and layout webpages",
    options: [
      "Style and layout webpages",
      "Creates dynamic webpages",
      "Compressing data",
    ],
  },

  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Computer Style Sheet",
      "Cascading Style Show",
      "Cascading Style Sheet",
    ],
  },
  {
    question: "What is an array used for is JS?",
    answer: "To store multiple values in a single variable",
    options: [
      "To hold a single object",
      "To store multiple values in a single variable",
      "To style",
    ],
  },
];
var currentIndex = 0

function countdown(){
  console.log("timer")
}

function startQuiz(event){
    event.preventDefault()
    console.log("Hey")
    // we must initate our countdow
    countdown()
    var startScreen = document.getElementById('start-screen')
    startScreen.classList.add("hide")
    var quizScreen = document.getElementById('questions')
    quizScreen.classList.remove("hide")
    //we want to display the first question
    showQuestion()
}

function showQuestion(){
  console.log("Showing question")
  var questionHolder = document.getElementById('question-title')
  var choicesHolder = document.getElementById('choices')
  choicesHolder.innerHTML = ""
  var currentQuestion = questions[currentIndex]
  console.log(currentQuestion)
  questionHolder.textContent = currentQuestion.question
  for(let i=0; i< currentQuestion.options.length; i++){
    let button = document.createElement('button')
    button.textContent = currentQuestion.options[i]
    choicesHolder.append(button)
    button.addEventListener('click',checkAnswer)
  }
}

function checkAnswer(event){
  event.preventDefault()
  console.log(event.target.innerHTML)
  if(event.target.innerHTML === questions[currentIndex].answer){
    alert("Correct answer!")
  } else{
    alert("Wrong answer!")
  }
  // if we have more time and also if we have any questions left
  if(currentIndex == questions.length -1){
    endQuiz()
  } else{
    currentIndex ++
    showQuestion()
  }
}

function endQuiz(){
  console.log("Doing end quiz function stuff")
}

var startButton = document.querySelector("#start");
console.log(startButton);
startButton.addEventListener('click', startQuiz)
