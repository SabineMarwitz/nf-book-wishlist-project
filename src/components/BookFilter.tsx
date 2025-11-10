type PropsType = {
  currentValue: string;
  updateFilter: (value: string) => void;
};

function BookFilter({ currentValue, updateFilter }: PropsType) {
  return (
    <div>
      <input
        type='radio'
        id='all'
        name='readStatus'
        value='all'
        checked={currentValue === 'all'}
        onChange={(e) => updateFilter(e.target.value)}
      ></input>
      <label htmlFor='all'>all</label>

      <input
        type='radio'
        id='read'
        name='readStatus'
        value='read'
        checked={currentValue === 'read'}
        onChange={(e) => updateFilter(e.target.value)}
      ></input>
      <label htmlFor='read'>read</label>

      <input
        type='radio'
        id='unread'
        name='readStatus'
        value='unread'
        checked={currentValue === 'unread'}
        onChange={(e) => updateFilter(e.target.value)}
      ></input>
      <label htmlFor='unread'>unread</label>
    </div>
  );
}

export default BookFilter;
