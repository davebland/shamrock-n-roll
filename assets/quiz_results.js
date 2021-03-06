var numCorrectThisRound = 0;

function showResults(answerClicked, resultsContainerId){

	// Check if answer clicked is correct answer (has css class 'correct_answer')
	if (answerClicked.classList.contains("correct_answer")) {
		numCorrectThisRound++;

		// color the answer green
		answerClicked.style.color = 'lightgreen';
	}
	// if answer is wrong
	else {
		// color the answers red
		answerClicked.style.color = 'red';
	}

	// show number of correct answers out of total
	document.getElementById(resultsContainerId).innerHTML = numCorrectThisRound + ' correct so far';
}