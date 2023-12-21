document.addEventListener("DOMContentLoaded", function () {
    // Define AMIDA game parameters
    var rows = 5;
    var columns = 5;
    var amida = createAmida(rows, columns);
    var ballPosition = Math.floor(Math.random() * columns);

    // Display initial AMIDA board
    displayAmida();

    // Display initial ball position
    displayBallPosition();

    // Function to create AMIDA board
    function createAmida(rows, columns) {
        var amida = [];
        for (var i = 0; i < rows; i++) {
            amida.push(Array(columns - 1).fill('|'));
        }
        return amida;
    }

    // Function to display AMIDA board
    function displayAmida() {
        var amidaBoard = document.getElementById("amida-board");
        amidaBoard.innerHTML = '';

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns - 1; j++) {
                var line = document.createElement("div");
                line.className = "line";
                line.textContent = '|';
                amidaBoard.appendChild(line);
            }
            var newline = document.createElement("br");
            amidaBoard.appendChild(newline);
        }
    }

    // Function to display ball position
    function displayBallPosition() {
        document.getElementById("ball-position").textContent = "The ball starts at column " + (ballPosition + 1) + ".";
    }

    // Function to place horizontal line in AMIDA board
    function placeHorizontalLine(row, column) {
        var lines = document.getElementsByClassName("line");
        var index = row * (columns - 1) + column;
        lines[index].textContent = '---';
    }

    // Function to play AMIDA game
    window.makeMove = function () {
        var moveInput = document.getElementById("move").value.toUpperCase();

        if (moveInput === 'L') {
            ballPosition = Math.max(0, ballPosition - 1);
        } else if (moveInput === 'R') {
            ballPosition = Math.min(columns - 1, ballPosition + 1);
        } else {
            alert("Invalid move. Please enter 'L' or 'R'.");
            return;
        }

        if (ballPosition < columns - 1) {
            placeHorizontalLine(rows - 1, ballPosition);
        }

        displayAmida();
        displayBallPosition();

        if (ballPosition === columns - 1) {
            alert("Congratulations! The ball reached column " + (ballPosition + 1) + ". You won!");
        }
    };
});
