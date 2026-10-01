import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBookById } from "../data/books";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../hooks/useFavorites";
import BookCover from "../components/BookCover";
import Loader from "../components/Loader";
import Button from "../components/Button";

function BookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Перезагружаем книгу при смене id в адресе
  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    fetchBookById(id).then((data) => {
      if (!ignore) {
        setBook(data);
        setIsLoading(false);
      }
    });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (isLoading) {
    return <Loader text="Загружаем книгу..." />;
  }

  if (!book) {
    return (
      <section className="page not-found">
        <h1>Книга не найдена</h1>
        <p>Книги с номером {id} нет в каталоге.</p>
        <Button to="/catalog">В каталог</Button>
      </section>
    );
  }

  return (
    <section className="page book">
      <BookCover title={book.title} author={book.author} color={book.color} size="large" />

      <div className="book__info">
        <span className="book__genre">{book.genre}</span>
        <h1>{book.title}</h1>
        <p className="book__author">{book.author}</p>
        <p>{book.description}</p>

        <ul className="book__meta">
          <li>Год издания: {book.year}</li>
          <li>Страниц: {book.pages}</li>
          <li>Рейтинг: ★ {book.rating}</li>
        </ul>

        <p className="book__price">{book.price} ₽</p>

        <div className="book__actions">
          {user ? (
            <Button onClick={() => toggleFavorite(book.id)}>
              {favorites.includes(book.id) ? "♥ В избранном" : "♡ В избранное"}
            </Button>
          ) : (
            <Button to="/login">Войдите, чтобы добавить в избранное</Button>
          )}
          <Button variant="outline" onClick={() => navigate("/catalog")}>
            ← Назад в каталог
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BookPage;
