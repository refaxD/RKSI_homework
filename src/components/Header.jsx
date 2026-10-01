import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/");
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Книжная полка
        </Link>

        <button
          type="button"
          className="burger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* На мобильных это выпадающее меню, на широком экране — обычная строка в шапке */}
        <div className={isMenuOpen ? "header__menu header__menu--open" : "header__menu"} onClick={closeMenu}>
          <nav className="nav">
            <NavLink to="/" end className="nav__link">
              Главная
            </NavLink>
            <NavLink to="/catalog" className="nav__link">
              Каталог
            </NavLink>
          </nav>

          <div className="header__actions">
            {user ? (
              <>
                <NavLink to="/account" className="nav__link">
                  {user.name}
                </NavLink>
                <button type="button" className="nav__link nav__button" onClick={handleLogout}>
                  Выйти
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="nav__link">
                  Войти
                </NavLink>
                <NavLink to="/register" className="nav__link">
                  Регистрация
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
