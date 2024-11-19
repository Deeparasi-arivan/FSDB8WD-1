import React, { useRef } from 'react'
import { useLibrary } from './LibraryContext.jsx'

function BookList() {
    const { state, dispatch } = useLibrary();
    const bookRef = useRef({}); // Reference to track the book element for focus

    const borrowBook = (id) => {
        dispatch({ type: 'borrow', id });
        if (bookRef.current[id])
            bookRef.current[id].focus(); // Focus on the borrowed book
    };

    const returnBook = (id) => {
        dispatch({ type: 'return', id });
        if (bookRef.current[id])
            bookRef.current[id].focus(); // Focus on the borrowed book
    };

    return (
        <div>
            <h2>Library Book List</h2>
            <span>Borrower Book -  {state.borrowedBooks.length}</span>
            <ul>
                {state.books.map((book) => (
                    <li key={book.id}>
                        <span>{book.title} by {book.author}</span>
                        <button

                            onClick={() => (book.available ? borrowBook(book.id) : returnBook(book.id))}
                        >
                            {book.available ? 'Borrow' : 'Return'}
                        </button>
                        <input ref={(el) => (bookRef.current[book.id] = el)} type="text" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList