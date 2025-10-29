type PropsType = {
  addBook: () => void;
};

function BookForm({ addBook }: PropsType) {
  return (
    <form action={addBook}>
      <p>
        <input type='text' placeholder='Author' name='author' required></input>
      </p>
      <p>
        <input type='text' placeholder='Title' name='title' required></input>
      </p>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default BookForm;
