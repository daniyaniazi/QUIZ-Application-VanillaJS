let finalScore = document.getElementById('finalscore');
let statusIMG = document.getElementById('status-img');
// Getlocalstorage;
const mostRecentScore = localStorage.getItem('mostRecentScore')
if (mostRecentScore > 10) {
    finalScore.className = 'text-success';
    statusIMG.src = 'https://animated.name/uploads/posts/2016-08/1472038239_1342.gif';
} else {
    finalScore.className = 'text-danger';
    statusIMG.src = 'https://media.giphy.com/media/SqAwfYxt4dG9k0ma68/giphy.gif';
}
finalScore.innerText = mostRecentScore;