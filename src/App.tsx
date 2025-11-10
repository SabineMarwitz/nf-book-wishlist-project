import { useState } from 'react';
import './App.css';
import BookItems from './components/BookItems';
import BookForm from './components/BookForm';
import type { Book } from './types/book';
import BookFilter from './components/BookFilter';

type BookList = Book[];

const bookList: BookList = [
  {
    id: 0,
    author: 'Benjamin Lebert',
    title: 'Crazy',
    read: true,
  },
];

function App() {
  const [count, setCount] = useState<number>(0); // count = highest used id
  const [books, setBooks] = useState<BookList>(bookList);
  const [filter, setFilter] = useState<string>('');

  function updateFilter(value: string) {
    setFilter(value);
  }

  function addBook(formData: { get: (arg0: string) => any }): void {
    const id = count + 1;
    const author = formData.get('author');
    const title = formData.get('title');
    setBooks([{ id, author, title, read: false }, ...books]);
    setCount(id);
  }

  function deleteBook(id: number) {
    const updatedBookList = books.filter((book) => book.id !== id);
    setBooks(updatedBookList);
  }

  function updateBookReadStatus(id: number) {
    // update read status by id
    const updatedBookList = books.map((book) => {
      if (book.id === id) {
        book.read = !book.read;
      }
      return book;
    });
    setBooks(updatedBookList);
  }

  return (
    <>
      <h1>Book Wishlist App</h1>

      <div className='card1'>
        <h2>Add Book:</h2>
        <BookForm addBook={addBook}></BookForm>
      </div>

      <div className='filter'>
        <h2>Book Filter:</h2>
        <BookFilter
          currentValue={filter}
          updateFilter={updateFilter}
        ></BookFilter>
      </div>

      <div className='card2'>
        <h2>Book List:</h2>
        <BookItems
          bookList={books}
          value={filter}
          deleteBook={deleteBook}
          updateBookReadStatus={updateBookReadStatus}
        />
      </div>
    </>
  );
}

export default App;
