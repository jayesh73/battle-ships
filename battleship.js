var location1 = Math.floor(Math.random() * 4);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess = undefined;
var hitsCount = 0;
var guessesCount = 0;
var isSunk = false;


// Task 1
while (isSunk == false) {
    guess = prompt("Ready Aim and Fire! Enter a number between 0 and 6:");


    //Task 2
    if (guess < 0 || guess > 6) {
        alert("Please enter valid number between 0 and 6:");
    } else {
        guessesCount = guessesCount + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hitsCount = hitsCount + 1;

            if (hitsCount == 3) {
                isSunk = true;
                alert("You've sunk the ship!");
            }
        } else {
            alert("Miss!");
        }
    }
}

var stats = "You took " + guessesCount + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (hitsCount / guessesCount) * 100 + " %.";
alert(stats);