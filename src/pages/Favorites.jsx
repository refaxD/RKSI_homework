import { books } from "../data/books";
import { useFavorites } from "../hooks/useFavorites";
import BookList from "../components/BookList";
import Button from "../components/Button";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteBooks = books.filter((book) => favorites.includes(book.id));

  return (
    <div>
      <h1>Избранное</h1>

      {favoriteBooks.length === 0 ? (
        <div className="empty">
          <p>Вы пока ничего не добавили в избранное.</p>
          <Button to="/catalog">Перейти в каталог</Button>
        </div>
      ) : (
        <BookList books={favoriteBooks} favorites={favorites} onToggleFavorite={toggleFavorite} />
      )}
    </div>
  );
}

export default Favorites;
