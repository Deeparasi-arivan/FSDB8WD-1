const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next(); // Continue to the next middleware or route handler
});

// Mock database (array to store books)
let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

// Routes

//1. GET: View all books
app.get("/books", (req, res) => {
  res.json(books);
});

//2. GET: View a specific book by ID
app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (!book) {
    res.status(404).json({ error: "Book not found" });
  } else {
    res.json(book);
  }
});

//3. POST: Add a new book
app.post("/books", (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(books);
});

//4. PUT: Replace a book (update all fields)
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex === -1) {
    res.status(404).json({ error: "Book not found" });
  } else {
    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    res.json(books[bookIndex]);
  }
});

//5. PATCH: Update a book (update specific fields)
app.patch("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex === -1) {
    res.status(404).json({ error: "Book not found" });
  } else {
    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    res.json(books[bookIndex]);
  }
});

//6. DELETE: Remove a book
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex === -1) {
    res.status(404).json({ error: "Book not found" });
  } else {
    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
