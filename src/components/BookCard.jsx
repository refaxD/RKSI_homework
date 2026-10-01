import { Link } from "react-router-dom";
import BookCover from "./BookCover";

function BookCard({ book }) {
  return (
    <article className="card">
      <Link to={`/catalog/${book.id}`} className="card__link">
        <BookCover title={book.title} author={book.author} color={book.color} />
        <div className="card__body">
          <h3 className="card__title">{book.title}</h3>
          <p className="card__author">{book.author}</p>
        </div>
      </Link>
      <div className="card__footer">
        <span className="card__price">{book.price} ₽</span>
        <span className="card__rating">★ {book.rating}</span>
      </div>
    </article>
  );
}

export default BookCard;
