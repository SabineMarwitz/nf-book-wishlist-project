import type { Book } from '../types/book';
import CheckBox from './CheckBox';

type PropsType = {
  bookList: Book[];
  deleteBook: (id: number) => void;
  updateBookReadStatus: (id: number) => void;
};

function BookItems(props: PropsType) {
  const books = props.bookList.map((book: Book) => (
    <li key={book.id}>
      {book.title}, {book.author} ...
      <CheckBox book={book} updateBook={props.updateBookReadStatus} />
      <button key={book.id} onClick={() => props.deleteBook(book.id!)}>
        Delete Book
      </button>
    </li>
  ));
  return <ul>{books}</ul>;
}

export default BookItems;
