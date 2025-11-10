import CheckBox from './CheckBox';

type Book = {
  id?: number;
  author: string;
  title: string;
  read: boolean;
};

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
