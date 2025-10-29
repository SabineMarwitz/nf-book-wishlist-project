type Book = {
  id?: number;
  author: string;
  title: string;
  read: boolean;
};

function BookItems(props: { bookList: Book[] }) {
  const books = props.bookList.map((book: Book) => (
    <li key={book.id}>
      {book.title}, {book.author}
    </li>
  ));
  return <ul>{books}</ul>;
}

export default BookItems;
