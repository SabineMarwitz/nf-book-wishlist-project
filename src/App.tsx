import { useState } from 'react';
import './App.css';
import BookItems from './components/BookItems';
import BookForm from './components/BookForm';

type Book = {
  id?: number;
  author: string;
  title: string;
  read: boolean;
};

type BookList = Book[];

let bookList: BookList = [
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

  function addBook(formData: { get: (arg0: string) => any }): void {
    const id = count + 1;
    const author = formData.get('author');
    const title = formData.get('title');
    setBooks([{ id, author, title, read: false }, ...books]);
    setCount(id);
  }

  return (
    <>
      <h1>Book Wishlist App</h1>

      <div className='card1'>
        <h2>Add Book:</h2>
        <BookForm addBook={addBook}></BookForm>
      </div>

      <div className='card2'>
        <h2>Book List:</h2>
        <BookItems bookList={books} />
      </div>
    </>
  );
}

export default App;
