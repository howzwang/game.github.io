const legs = [
    { thing: 'Prize 1' },
    { thing: 'Prize 2' },
    { thing: 'Prize 3' },
    { thing: 'Prize 4' }
];

function shuffleLegs() {
    const shuffledLegs = shuffleArray(legs.slice());
    displayLegs(shuffledLegs);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayLegs(legsArray) {
    const legsContainer = document.getElementById('legs-container');
    legsContainer.innerHTML = '';

    legsArray.forEach((leg, index) => {
        const verticalLine = document.createElement('div');
        verticalLine.className = 'vertical-line';

        for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
            const horizontalLine = document.createElement('div');
            horizontalLine.className = 'horizontal-line';
            verticalLine.appendChild(horizontalLine);
        }

        const thingLabel = document.createElement('div');
        thingLabel.className = 'thing-label';
        thingLabel.textContent = leg.thing;
        verticalLine.appendChild(thingLabel);

        legsContainer.appendChild(verticalLine);
    });
}
