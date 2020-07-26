let finalScore = document.getElementById('finalscore');

// Getlocalstorage;
const mostRecentScore = localStorage.getItem('mostRecentScore')
if (mostRecentScore > 10) {
    finalScore.className = 'text-success';
} else {
    finalScore.className = 'text-danger';
}
finalScore.innerText = mostRecentScore;