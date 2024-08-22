/**
 * Function to generate a random number and display it.
 */
function generateRandomNumber() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the generated random number in the UI
    document.getElementById('random-number').textContent = randomNumber;
}

/**
 * Initialize event listeners after the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-btn');
    generateButton.addEventListener('click', generateRandomNumber);
});
