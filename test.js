/**
 * Test function to check if the generateRandomNumber function works correctly.
 */
function testGenerateRandomNumber() {
    // Log the start of the test
    console.log("Starting test for generateRandomNumber function...");

    // Generate a random number using the function
    generateRandomNumber();

    // Retrieve the displayed number from the DOM
    const displayedNumber = parseInt(document.getElementById('random-number').textContent);

    // Check if the number is within the expected range (1-100)
    if (displayedNumber >= 1 && displayedNumber <= 100) {
        console.log("Test Passed: The number " + displayedNumber + " is within the valid range.");
    } else {
        console.log("Test Failed: The number " + displayedNumber + " is out of the valid range.");
    }
}

// Run the test
testGenerateRandomNumber();
