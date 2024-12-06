let attempts = 0;

function validateInput(input) {
    const regex = /^[0-9]{4}$/;
    const uniqueDigits = new Set(input).size;
    return regex.test(input) && uniqueDigits === 4;
}

function checkGuess(guess, answer) {
    let A = 0, B = 0;
    guess.split('').forEach((digit, index) => {
        if (answer.includes(Number(digit))) {
            if (answer[index] === Number(digit)) A++;
            else B++;
        }
    });
    return `${A}A${B}B`;
}

function submitGuess() {
    const guess = document.getElementById("guess").value;
    if (!validateInput(guess)) {
        alert("Invalid input! Enter 4 unique digits.");
        return;
    }

    attempts++;
    const result = checkGuess(guess, answer);
    document.getElementById("results").innerHTML += `<p>${guess} => ${result}</p>`;

    if (result === "4A0B") {
        alert(`Congratulations! You guessed the answer in ${attempts} attempts.`);
        location.reload(); // Reset the game
    } else {
        document.getElementById("guess").value = ""; // Clear input
    }
}
function generateAnswer() {
    const digits = Array.from({ length: 10 }, (_, i) => i); // [0-9]
    let answer = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        answer.push(digits.splice(randomIndex, 1)[0]);
    }
    return answer;
}
const answer = generateAnswer();
console.log(answer); 
