const toggleQuestion = (questionDiv, question, answer, arrow) => {
	questionDiv.addEventListener("click", () => {
		const activeQuestion = document.querySelector(".active-question");
		const activeAnswer = document.querySelector(".active-answer");
		const activeArrow = document.querySelector(".active-arrow");

		if (
			activeQuestion &&
			activeAnswer &&
			activeArrow &&
			activeQuestion !== question
		) {
			activeQuestion.classList.remove("active-question");
			activeAnswer.classList.remove("active-answer");
			activeArrow.classList.remove("active-arrow");
		}

		question.classList.toggle("active-question");
		answer.classList.toggle("active-answer");
		arrow.classList.toggle("active-arrow");
	});
};

const questionsDiv = document.getElementsByClassName("question-div");
const questions = document.getElementsByClassName("question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".question-div img");

for (let i = 0; i < questionsDiv.length; i++) {
	toggleQuestion(questionsDiv[i], questions[i], answers[i], arrows[i]);
}