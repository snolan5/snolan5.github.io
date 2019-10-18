

window.onload = function() {
document.getElementById("Quest1").addEventListener("submit", question1);
document.getElementById("Quest2").addEventListener("submit", question2);
document.getElementById("Quest3").addEventListener("submit", question3);
document.getElementById("Quest4").addEventListener("submit", question4);
document.getElementById("Quest5").addEventListener("submit", question5);
}
var current_question = 1;
var score = 0;
var id = "Question1";
function question1(e) {
e.preventDefault();
  var x = document.getElementById("answer1").checked;
if(x == true){
score = score+1;
document.querySelector("#score").innerHTML = `Score: ${score}`;
current_question = current_question+ 1;
document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
alert("Answer Correct!");
}
else if(x == false) {
  current_question = current_question + 1;
  document.querySelector("#score").innerHTML = `Score: ${score}`;
  document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
  alert("Answer Incorrect");
}
document.getElementById('Question1').style.display = "none";
id = id + current_question;
document.getElementById(id).style.display = "flex";
}

function question2(e) {
  e.preventDefault();
  var x = document.getElementById("answer2").checked;
if(x == true){
score = score + 1;
  document.querySelector("#score").innerHTML = `Score: ${score}`;
current_question = current_question + 1;
document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
alert("Answer Correct!");
}
else if(x == false) {
  current_question = current_question + 1;
  document.querySelector("#score").innerHTML = `Score: ${score}`;
  document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
  alert("Answer Incorrect");
}
document.getElementById(id).style.display = "none";
id = id + current_question;
document.getElementById(id).style.display = "flex";
}
function question3(e) {
e.preventDefault();
  var x = document.getElementById("answer3").checked;
if(x == true){
score = score+1;
document.querySelector("#score").innerHTML = `Score: ${score}`;
current_question = current_question+ 1;
document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
alert("Answer Correct!");
}
else if(x == false) {
  current_question = current_question + 1;
  document.querySelector("#score").innerHTML = `Score: ${score}`;
  document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
  alert("Answer Incorrect");
}
document.getElementById(id).style.display = "none";
id = id + current_question;
document.getElementById(id).style.display = "flex";
}
function question4(e) {
e.preventDefault();
  var x = document.getElementById("answer4").checked;
if(x == true){
score = score+1;
document.querySelector("#score").innerHTML = `Score: ${score}`;
current_question = current_question+ 1;
document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
alert("Answer Correct!");
}
else if(x == false) {
  current_question = current_question + 1;
  document.querySelector("#score").innerHTML = `Score: ${score}`;
  document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
  alert("Answer Incorrect");
}
document.getElementById(id).style.display = "none";
id = id + current_question;
document.getElementById(id).style.display = "flex";
}
function question5(e) {
e.preventDefault();
  var x = document.getElementById("answer5").value;
if(x == "True" || x == "true"){
score = score+1;
document.querySelector("#score").innerHTML = `Score: ${score}`;
document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
alert("Answer Correct!");
}
else if(x != "True" || x != "true") {
  document.querySelector("#score").innerHTML = `Score: ${score}`;
  document.querySelector("#QuestionNum").innerHTML = `Question # ${current_question}`;
  alert("Answer Incorrect");
}
if(score >= 4){
  alert("Congratulations you passed!")
}
else if(score < 4){
  alert("Sorry you failed")
}
current_question = current_question +1;
document.getElementById(id).style.display = "none";
id = id + current_question;
document.getElementById(id).style.display = "flex";
}
