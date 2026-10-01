import { books } from "../data/books";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../hooks/useFavorites";
import BookList from "../components/BookList";
import Button from "../components/Button";

function Home() {
  const { user } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <section className="page">
      <div className="hero">
        <h1>Книги, которые хочется перечитывать</h1>
        <p>
          Классика, фантастика, детективы и не только. Найдите книгу по душе и сохраните её в
          избранное, чтобы не потерять.
        </p>
        <Button to="/catalog">Перейти в каталог</Button>
      </div>

      <h2>Самые популярные</h2>
      <BookList
        books={popularBooks}
        favorites={favorites}
        onToggleFavorite={user ? toggleFavorite : undefined}
      />
    </section>
  );
}

export default Home;
