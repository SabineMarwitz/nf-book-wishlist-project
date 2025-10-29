import { useState } from 'react';
import './App.css';

type Book = {
  id?: number;
  author: string;
  title: string;
  read: boolean;
};

type BookList = Book[];

function BookItems(props: { bookList: Book[] }) {
  const books = props.bookList.map((book: Book) => (
    <li key={book.id}>
      {book.title}, {book.author}
    </li>
  ));
  return <ul>{books}</ul>;
}

let bookList: BookList = [
  {
    id: 0,
    author: 'Benjamin Lebert',
    title: 'Crazy',
    read: true,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState<BookList>(bookList);

  function updateList(formData: { get: (arg0: string) => any }): void {
    const id = count + 1;
    const author = formData.get('author');
    const title = formData.get('title');
    const newBook: Book = { id, author, title, read: false };

    setBooks([newBook, ...books]);
    setCount(id);
  }

  return (
    <>
      <h1>Book Wishlist App</h1>
      <div className='card1'>
        <h2>Add Book:</h2>
        <form action={updateList}>
          <p>
            <input
              type='text'
              placeholder='Author'
              name='author'
              required
            ></input>
          </p>
          <p>
            <input
              type='text'
              placeholder='Title'
              name='title'
              required
            ></input>
          </p>
          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className='card2'>
        <h2>Book List:</h2>
        <BookItems bookList={books} />
      </div>
    </>
  );
}

export default App;
