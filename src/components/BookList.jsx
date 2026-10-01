import BookCard from "./BookCard";

function BookList({ books, emptyText = "Ничего не найдено" }) {
  if (books.length === 0) {
    return <p className="empty">{emptyText}</p>;
  }

  return (
    <div className="grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
