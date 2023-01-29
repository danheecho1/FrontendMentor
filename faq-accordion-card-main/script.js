let questionsDiv = document.getElementsByClassName("question-div");
let questions = document.getElementsByClassName("question");
let answers = document.querySelectorAll(".answer");
let arrows = document.querySelectorAll(".question-div img");

for (let i = 0; i < questionsDiv.length; i++) {
	questionsDiv[i].addEventListener("click", function () {
		questions[i].classList.toggle("active-question");
		answers[i].classList.toggle("active-answer");
		arrows[i].classList.toggle("active-arrow");
	});
}

// 1440 920 965

// ChatGPT's refactored version

// const toggleQuestion = (questionDiv, question, answer, arrow) => {
// 	questionDiv.addEventListener("click", () => {
// 		question.classList.toggle("active-question");
// 		answer.classList.toggle("active-answer");
// 		arrow.classList.toggle("active-arrow");
// 	});
// };

// const questionsDiv = document.getElementsByClassName("question-div");
// const questions = document.getElementsByClassName("question");
// const answers = document.querySelectorAll(".answer");
// const arrows = document.querySelectorAll(".question-div img");

// for (let i = 0; i < questionsDiv.length; i++) {
// 	toggleQuestion(questionsDiv[i], questions[i], answers[i], arrows[i]);
// }

// My refactored code is more maintainable because it separates the event listener logic from the for loop that iterates through the elements. 
// This makes it easier to understand what the code is doing, and also makes it easier to add functionality to the event listener in the future.
// In your original code, the event listener logic is mixed in with the for loop and the variable assignments, making it harder to understand the overall structure of the code. 
// Additionally, it is harder to make changes to the event listener without also changing the loop and variable assignments.
// By creating a separate function, toggleAnswer, it encapsulates the event listener logic, making it clear what the function does and also making it easy to re-use the function in other parts of the code if needed.
// Another aspect is that by using arrow function, it makes the code more readable and less verbose.