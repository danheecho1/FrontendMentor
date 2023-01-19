function submitRating() {
	let submittedScore = document.querySelector('input[name="rating"]:checked').value;
	let scoreDeclaration = document.querySelector(".score-declaration");
	let front = document.querySelector(".card-front");
	let back = document.querySelector(".card-back");

	scoreDeclaration.innerText = `You selected ${submittedScore} out of 5.`;
	front.style.display = "none";
	back.style.display = "block";
}