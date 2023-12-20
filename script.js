// Define the legs and shuffle function
const legs = ['Leg 1', 'Leg 2', 'Leg 3', 'Leg 4']; // Add more legs if needed

function shuffleLegs() {
    const shuffledLegs = shuffleArray(legs.slice()); // Create a copy of the array to avoid modifying the original
    displayLegs(shuffledLegs);
}

// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to display shuffled legs
function displayLegs(legsArray) {
    const legsContainer = document.getElementById('legs-container');
    legsContainer.innerHTML = '';

    legsArray.forEach((leg, index) => {
        const legDiv = document.createElement('div');
        legDiv.textContent = `Person ${index + 1}: ${leg}`;
        legsContainer.appendChild(legDiv);
    });
}
