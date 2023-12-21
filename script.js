const gameContainer = document.getElementById('game-container');
let selectedCards = [];

function createGameBoard() {
    const numberOfPairs = prompt('Enter the number of pairs:');
    
    for (let i = 1; i <= numberOfPairs; i++) {
        const name = prompt(`Enter name for Pair ${i}:`);
        const number = prompt(`Enter number for Pair ${i}:`);

        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = '?'; // Display a question mark initially
        card.addEventListener('click', () => flipCard(card, { name, number }));
        gameContainer.appendChild(card);
    }
}

function flipCard(card, pair) {
    if (selectedCards.length < 2) {
        card.textContent = pair.name;
        selectedCards.push({ card, pair });

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.pair.number === card2.pair.number) {
        card1.card.classList.add('matched');
        card2.card.classList.add('matched');
    } else {
        card1.card.textContent = '?';
        card2.card.textContent = '?';
    }

    selectedCards = [];
}

window.addEventListener('DOMContentLoaded', createGameBoard);
