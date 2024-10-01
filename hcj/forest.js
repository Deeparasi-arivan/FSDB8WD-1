// This script handles the puzzle interaction in the Magical Forest scene

// Add event listener for the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", function () {
  // Get the user's input from the number input field
  const userAnswer = document.getElementById("user-answer").value;

  // Get the element where we'll display the result of the user's answer
  const answerOutput = document.getElementById("answer-output");

  // Check if the user's answer is correct
  if (userAnswer == 8) {
    // If the answer is correct, display a success message
    answerOutput.innerText = "Correct! You may proceed.";
    answerOutput.style.color = "green";

    // After a short delay, redirect to the Cave of Codes (cave.html)
    setTimeout(() => (window.location.href = "cave.html"), 2000);
  } else {
    // If the answer is wrong, display a failure message
    answerOutput.innerText = "Wrong answer! Try again.";
    answerOutput.style.color = "red";
  }
});
