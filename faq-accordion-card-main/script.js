let questions = document.getElementsByClassName("question-div");
let answers = document.querySelectorAll(".answer");
let arrows = document.querySelectorAll(".question-div img")

for(let i = 0; i < questions.length; i++) {
	questions[i].addEventListener("click", function() {
		answers[i].classList.toggle("active");
		arrows[i].classList.toggle("expanded");
	});
}