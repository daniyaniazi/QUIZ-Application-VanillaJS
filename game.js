// Question 
const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))
    // console.log(choices);


let currentQues = {};
let acceptingAnswer = false;
let score = 0;
let quesCounter = 0;
let AvailableQuestions = [];

let questions = [{
        question: "Who invented JavaScript?",
        choice1: "Douglas Crockford",
        choice2: "Sheryl Sandberg",
        choice3: "Brendan Eich",
        correctAnswer: "3"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        choice1: "Node.js",
        choice2: "TypeScript",
        choice3: "npm",
        correctAnswer: "3"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        choice1: "jQuery",
        choice2: "RequireJS",
        choice3: "ESLint",
        correctAnswer: "3"
    }
];


// CONSTANT
const maxQuestion = 3;
const correctBonus = 10;
startGame = () => {
    quesCounter = 0;
    score = 0;
    AvailableQuestions = [...questions]; // if we assign if we make changes it will effect both of them so we make hgere a full copy
    console.log(AvailableQuestions);
    getNewQuestion();
};




// NEW QUESTION GET
getNewQuestion = () => {
    if (AvailableQuestions.length === 0 || quesCounter >= maxQuestion) {
        return window.location.assign('game.html')
    }
    quesCounter++;
    const questionIndex = Math.floor(Math.random() * AvailableQuestions.length);
    currentQues = AvailableQuestions[questionIndex];
    question.innerText = currentQues.question;

    // for choices
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQues['choice' + number]
    });
    AvailableQuestions.splice(questionIndex, 1)
    acceptingAnswer = true;
};



// GETTING ANSWERS
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        console.log(e.target, 'here');
        console.log('clicked');
        console.log(choice);
        if (!acceptingAnswer) return;
        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];


        // ADDING CLASSES FOR CORRECT ANSWER
        // console.log(selectedAnswer == currentQues.correctAnswer);
        let classToApply = 'choice bg-danger  text-left rounded d-flex  mb-4';
        if (selectedAnswer == currentQues.correctAnswer) {
            classToApply = 'choice bg-success  text-left rounded d-flex  mb-4'
        }
        // console.log(classToApply)
        choice.parentElement.className = classToApply;



        // REMOVE CLASSES AND CALL OUR NEXT QUESTION
        setTimeout(() => {
            choice.parentElement.className = 'choice bg-light  text-left rounded d-flex  mb-4';

            getNewQuestion();
        }, 1000);

    });
});
startGame();