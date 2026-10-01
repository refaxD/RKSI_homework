function FavoriteButton({ isActive, onToggle }) {
  return (
    <button
      type="button"
      className={isActive ? "fav fav--active" : "fav"}
      onClick={onToggle}
      title={isActive ? "Убрать из избранного" : "Добавить в избранное"}
      aria-pressed={isActive}
    >
      {isActive ? "♥" : "♡"}
    </button>
  );
}

export default FavoriteButton;
