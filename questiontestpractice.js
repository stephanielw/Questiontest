// Write JavaScript here and press Ctrl+Enter to execute
(function(){
  function Question(question, answers, correct){
	this.question = question;
	this.answers =answers;
	this.correct = correct;
}

Question.prototype.displayQuestion = function(){
  console.log(this.question);
  this.answers.forEach((answer,i)=>console.log(i + ":" + answer));
}

Question.prototype.checkAnswer = function(ans,fn){
  
  if(ans == this.correct){
    console.log("great job, this is right");
    var sc =fn(true);
  }else{
    console.log('sorry you are wrong');
    var sc = fn(false);
  }
  this.displayScore(sc);
}
Question.prototype.displayScore = function(score){
	console.log('your current score is ' + score);
	console.log('------------------------');
}
var q1 = new Question ("1+1?", [1,3,2], 2);
var q2 = new Question ("2+2?", [1,3,4], 2);
var q3 = new Question ("3+3?", [1,3,6], 2);
var questions = [q1,q2,q3];

function score()
{
	var total = 0;
	
  return function(correct){
		if(correct){
			total++;
		}
			return total;
		}
}

var keepScore = score();

function nextQuestion(){

var n = Math.floor(Math.random()*questions.length);
questions[n].displayQuestion();

var answer = prompt("please select the correct answer."); 

  if(answer !=='exit'){
  	questions[n].checkAnswer(parseInt(answer),keepScore);
    nextQuestion();
  }

}
  nextQuestion();
})();





