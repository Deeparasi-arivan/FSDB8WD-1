document.getElementById("run-code").addEventListener("click", function () {
  const codeInput = document.getElementById("code-input").value;
  const codeOutput = document.getElementById("code-output");

  // Example of evaluating a simple function (be cautious with eval in real-world apps)
  try {
    const result = eval(codeInput + "add(2, 3);"); // User-defined function is expected
    if (result === 5) {
      codeOutput.innerText =
        "Success! The door unlocks and you find the magical phone!";
      codeOutput.style.color = "green";
    } else {
      codeOutput.innerText = "Oops! Try writing the correct function.";
      codeOutput.style.color = "red";
    }
  } catch (error) {
    codeOutput.innerText = "Error in the code. Please check and try again!";
    codeOutput.style.color = "red";
  }
});
