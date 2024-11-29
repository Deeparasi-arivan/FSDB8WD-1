const express = require("express"); // import express.js
const app = express(); // create an express application Server
const PORT = 3000;

// function to display name
function displayName(name) {
  return `Hello ${name}`;
}

// function to display age
function displayAge(age) {
  return `Your age is ${age}`;
}

// route to display name
app.get("/", (req, res) => {
  res.send(displayName("Manikandan Anbalagan"));
});

// route to different page
app.get("/about", (req, res) => {
  res.send("This is about page");
});

// route to display age
app.get("/age", (req, res) => {
  res.send(displayAge(23));
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
