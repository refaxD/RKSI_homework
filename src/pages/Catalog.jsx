import { useState, useEffect } from "react";
import { fetchBooks, genres } from "../data/books";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../hooks/useFavorites";
import BookList from "../components/BookList";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";

function Catalog() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("Все");
  const { user } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    let ignore = false;

    fetchBooks().then((data) => {
      if (!ignore) {
        setBooks(data);
        setIsLoading(false);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  const search = query.trim().toLowerCase();
  const visibleBooks = books.filter((book) => {
    const matchesGenre = genre === "Все" || book.genre === genre;
    const matchesSearch =
      book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search);
    return matchesGenre && matchesSearch;
  });

  return (
    <section className="page">
      <h1>Каталог</h1>

      <div className="filters">
        <SearchBar value={query} onChange={setQuery} />
        <GenreFilter genres={genres} selected={genre} onSelect={setGenre} />
      </div>

      {isLoading ? (
        <Loader text="Загружаем книги..." />
      ) : (
        <>
          <p className="found">Найдено книг: {visibleBooks.length}</p>
          <BookList
            books={visibleBooks}
            emptyText="По вашему запросу ничего не найдено"
            favorites={favorites}
            onToggleFavorite={user ? toggleFavorite : undefined}
          />
        </>
      )}
    </section>
  );
}

export default Catalog;
