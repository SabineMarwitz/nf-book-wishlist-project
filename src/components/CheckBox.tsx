type Book = {
  id?: number;
  author: string;
  title: string;
  read: boolean;
};

type PropsType = {
  book: Book;
  updateBook: (id: number) => void;
};

function CheckBox({ book, updateBook }: PropsType) {
  const checkHandler = () => {
    if (book.id != undefined) updateBook(book.id);
  };

  return (
    <>
      <label htmlFor='read'>Read</label>
      <input
        type='checkbox'
        id='read'
        checked={book.read}
        onChange={checkHandler}
      ></input>
    </>
  );
}

export default CheckBox;
