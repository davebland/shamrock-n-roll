var numCorrectThisRound = 0;

function showResults(answerClicked, resultsContainerId){

	// Check if answer clicked is correct answer (has css class 'correct_answer')
	if (answerClicked.getAttribute("data-correctanswer") == "true") {
		numCorrectThisRound++;

		// color the answer green
		answerClicked.classList.add("correct_answer")
	}
	// if answer is wrong
	else {
		// color the answers red
		answerClicked.classList.add("incorrect_answer")
	}

	// show number of correct answers out of total
	document.getElementById(resultsContainerId).innerHTML = numCorrectThisRound + ' correct so far';
}