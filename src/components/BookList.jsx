import BookCard from "./BookCard";

// favorites и onToggleFavorite необязательные: гостю кнопка «в избранное» не показывается
function BookList({ books, emptyText = "Ничего не найдено", favorites = [], onToggleFavorite }) {
  if (books.length === 0) {
    return <p className="empty">{emptyText}</p>;
  }

  return (
    <div className="grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.includes(book.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default BookList;
