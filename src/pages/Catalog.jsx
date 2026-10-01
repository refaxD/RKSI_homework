import { useState, useEffect } from "react";
import { fetchBooks } from "../data/books";
import BookList from "../components/BookList";
import Loader from "../components/Loader";

function Catalog() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Флаг нужен, чтобы не обновлять состояние, если страницу уже закрыли до окончания загрузки
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

  return (
    <section className="page">
      <h1>Каталог</h1>
      {isLoading ? <Loader text="Загружаем книги..." /> : <BookList books={books} />}
    </section>
  );
}

export default Catalog;
