import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Account() {
  const { user } = useAuth();

  return (
    <section className="page account">
      <aside className="account__sidebar">
        <p className="account__hello">Привет, {user.name}!</p>
        <nav className="account__nav">
          <NavLink to="/account" end className="nav__link">
            Профиль
          </NavLink>
          <NavLink to="/account/favorites" className="nav__link">
            Избранное
          </NavLink>
        </nav>
      </aside>

      <div className="account__content">
        <Outlet />
      </div>
    </section>
  );
}

export default Account;
