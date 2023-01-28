let questionsDiv = document.getElementsByClassName("question-div");
let questions = document.getElementsByClassName("question")
let answers = document.querySelectorAll(".answer");
let arrows = document.querySelectorAll(".question-div img")

for(let i = 0; i < questionsDiv.length; i++) {
	questionsDiv[i].addEventListener("click", function() {
		questions[i].classList.toggle("active-question")
		answers[i].classList.toggle("active-answer");
		arrows[i].classList.toggle("active-arrow");
	});
}
