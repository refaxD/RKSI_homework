function GenreFilter({ genres, selected, onSelect }) {
  const options = ["Все", ...genres];

  return (
    <div className="chips">
      {options.map((genre) => (
        <button
          key={genre}
          type="button"
          className={genre === selected ? "chip chip--active" : "chip"}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
