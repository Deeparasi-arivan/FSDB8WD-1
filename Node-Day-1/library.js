const fs = require("fs"); //fs is a module of node
const path = require("path"); //path is a module of node

// Folder for storing our new books
const libraryPath = path.join(__dirname, "library"); //__dirname is a global variable in node

// Create the folder if it doesn't exist
if (fs.existsSync(libraryPath)) {
  console.log("Library already exists");
} else {
  fs.mkdirSync(libraryPath);
  console.log("Library created");
}

function addBook(bookName, content) {
  const bookPath = path.join(libraryPath, `${bookName}.txt`); //path.join is a function of path module
  fs.writeFileSync(bookPath, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Book added");
    }
  });
}

addBook("book1", "This is the content of book1");
