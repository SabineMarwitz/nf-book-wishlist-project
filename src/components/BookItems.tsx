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
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        {' '}
        <CheckBox book={book} updateBook={props.updateBookReadStatus} />
      </td>
      <td>
        <button key={book.id} onClick={() => props.deleteBook(book.id!)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <table className='bookTable'>
      <thead>
        <th>Title</th>
        <th>Author</th>
        <th></th>
        <th></th>
      </thead>
      <tbody>{books}</tbody>
    </table>
  );
}

export default BookItems;
