import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

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
    </header>
  );
}

export default Header;
