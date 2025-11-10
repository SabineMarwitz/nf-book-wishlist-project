import type { Book } from '../types/book';
import CheckBox from './CheckBox';

type PropsType = {
  bookList: Book[];
  value: string;
  deleteBook: (id: number) => void;
  updateBookReadStatus: (id: number) => void;
};

function filter(bookList: Book[], value: string) {
  if (value === 'read') {
    return bookList.filter((book) => book.read === true);
  } else if (value === 'unread') {
    return bookList.filter((book) => book.read === false);
  } else return bookList;
}

function BookItems(props: PropsType) {
  const filteredList = filter(props.bookList, props.value);
  const books = filteredList.map((book: Book) => (
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
