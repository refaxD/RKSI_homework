function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      className="search"
      placeholder="Название или автор..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default SearchBar;
