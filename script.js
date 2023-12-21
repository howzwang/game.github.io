const pairs = [
    { name: 'Alice', number: 1 },
    { name: 'Bob', number: 2 },
    { name: 'Charlie', number: 3 },
    // Add more pairs as needed
];

const gameContainer = document.getElementById('game-container');
let selectedCards = [];

function createGameBoard() {
    pairs.forEach(pair => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = '?'; // Display a question mark initially
        card.addEventListener('click', () => flipCard(card, pair));
        gameContainer.appendChild(card);
    });
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
