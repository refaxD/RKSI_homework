import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">
          Книжная полка
        </Link>

        <nav className="nav">
          <NavLink to="/" end className="nav__link">
            Главная
          </NavLink>
          <NavLink to="/catalog" className="nav__link">
            Каталог
          </NavLink>
        </nav>

        <div className="header__actions">
          <NavLink to="/login" className="nav__link">
            Войти
          </NavLink>
          <NavLink to="/register" className="nav__link">
            Регистрация
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
