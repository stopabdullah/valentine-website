// script.js
let noCount = 0;
const messages = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart!",
    "I'll be sad!",
    "I'll cry!",
    "Pretty please?",
    "Final answer?"
];
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const question = document.getElementById('question');

function handleYes() {
    document.body.style.background = '#ffe6eb';
    document.getElementById('celebration').style.display = 'block';
    document.getElementById('buttons').style.display = 'none';
    question.style.display = 'none';
    createConfetti();
}

function handleNo() {
    noCount++;
    yesButton.style.fontSize = `${1.2 + noCount * 0.2}em`;
    yesButton.style.padding = `${15 + noCount * 5}px ${30 + noCount * 10}px`;
    
    if (noCount < messages.length) {
        question.textContent = messages[noCount - 1];
    } else {
        question.textContent = "Okay, I'll keep asking!";
    }
    
    if (noCount >= 5) {
        yesButton.style.transform = `scale(${1 + noCount * 0.2})`;
    }
    
    if (noCount >= 10) {
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
        yesButton.style.position = 'fixed';
        yesButton.style.top = '0';
        yesButton.style.left = '0';
        yesButton.style.borderRadius = '0';
        noButton.style.display = 'none';
    }
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
    }
}