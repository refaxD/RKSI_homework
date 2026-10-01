function BookCover({ title, author, color, size = "small" }) {
  return (
    <div className={`cover cover--${size}`} style={{ backgroundColor: color }}>
      <span className="cover__title">{title}</span>
      <span className="cover__author">{author}</span>
    </div>
  );
}

export default BookCover;
