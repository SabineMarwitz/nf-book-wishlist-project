type Book = {
  id?: number;
  author: string;
  title: string;
  read: boolean;
};

type PropsType = {
  bookList: Book[];
  deleteBook: (id: number) => void;
};

function BookItems(props: PropsType) {
  const books = props.bookList.map((book: Book) => (
    <li key={book.id}>
      {book.title}, {book.author} ...
      <>
        <label htmlFor='read'>Read</label>
        <input type='checkbox' id='read' name='readFlag'></input>
      </>
      <button key={book.id} onClick={() => props.deleteBook(book.id!)}>
        Delete Book
      </button>
    </li>
  ));
  return <ul>{books}</ul>;
}

export default BookItems;
