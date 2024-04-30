function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}

 Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
 }

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.checkOptionWithAnswer = function(userAnswer)
{
    if(this.getQuestionByIndex().isCorrectAnswer(userAnswer)){
        this.score++;
    }
    this.questionsIndex++;
}

function Questions(questionText, choices, answer){
    this.questionText= questionText;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer= function(userAnswer){
    return this.answer=== userAnswer;
}

function loadQuestions(){
    if (Quiz.isEnded()){
    showScore();
}else{
    let question = Quiz.getQuestionByIndex();
    var element = document.getElementById("question");
    element.innerHTML= questions.questionText;
    var choices= question.choices;
    for (var i=0; i<choices.length; i++){
        var element= document.getElementById("choices" + i);
        element.innerHTML= choices[i];
        handleOptionButton("Btn" + i, choices[i]);
    }
    showProgress();

}
}
function handleOptionButton(id, choice){
let button = document.getElementById(id);
button.onclick=function(){
    isQuiz.checkOptionWithAnswer(choice);
    loadQuestions();
}
}

function showScore(){
let quizOverHTML = "<h1>Result</h1>";
quizOverHTML +="<h2> your score:" + jsQuiz.score + ". 6 mark percentage is: " + (jsQuiz.score*100/jsQuiz.questions.length) + "% </h2>";
document.getElementById("quiz").innerHTML = quizOverHTML;

}
function showProgress(){

}

let questions = [
    new Questions = ("Javascript Supports",["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Questions = ("Javascript is a",["Language","Programming Language","Development", "All"], "Programming Language"),
];



 let jsQuiz = new Quiz();