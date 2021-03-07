var numCorrectThisRound = -1;
var scoreHistory = []

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

function updateHistory() {

	// Clear history
	document.getElementById("score-history").innerHTML = '';

	// Add a history row for every round
	for (let i in scoreHistory) {
		let round = i;
		round++;
		document.getElementById("score-history").insertAdjacentHTML('beforeend', `
		<div class="leaderboard-row">
			<div class="leaderboard-round-column">Round ${round}</div>		
			<div class="leaderboard-score-column">${scoreHistory[i]}</div>
		</div>
		`);
	}
}