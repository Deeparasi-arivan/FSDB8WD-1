let cluesFound = 0;
const clues = {
  stall1: "Clue 1: The key is patience!",
  stall2: "Clue 2: Look for the light!",
  stall3: "Clue 3: A door will open!",
  stall4: "Clue 4: You’re almost there!",
};

document.querySelectorAll(".stall").forEach((stall) => {
  stall.addEventListener("click", function () {
    const clueText = clues[this.id];
    document.getElementById("clue-output").innerText = clueText;
    this.style.backgroundColor = "#55efc4"; // Change color when clicked
    cluesFound++;
    checkClues();
  });
});

function checkClues() {
  if (cluesFound === 4) {
    document.getElementById("next-scene-btn").style.display = "block";
  }
}

document
  .getElementById("next-scene-btn")
  .addEventListener("click", function () {
    window.location.href = "forest.html"; // Proceed to the next scene
  });
