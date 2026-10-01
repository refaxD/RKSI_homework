import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

// Пользователи хранятся в localStorage — это учебная замена базе данных.
// В настоящем проекте пароли в открытом виде так не хранят, этим занимается сервер.
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// В сессию кладём пользователя без пароля
function toSessionUser({ name, email, createdAt }) {
  return { name, email, createdAt };
}

export function AuthProvider({ children }) {
  // Функция в useState выполняется один раз, поэтому после F5 сессия восстанавливается
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  function register({ name, email, password }) {
    const users = getUsers();

    if (users.some((item) => item.email === email)) {
      return "Пользователь с таким email уже зарегистрирован";
    }

    const newUser = { name, email, password, createdAt: new Date().toISOString() };
    saveUsers([...users, newUser]);
    setUser(toSessionUser(newUser));
    return null;
  }

  function login(email, password) {
    const found = getUsers().find((item) => item.email === email && item.password === password);

    if (!found) {
      return false;
    }

    setUser(toSessionUser(found));
    return true;
  }

  function logout() {
    setUser(null);
  }

  function updateName(name) {
    const users = getUsers().map((item) => (item.email === user.email ? { ...item, name } : item));
    saveUsers(users);
    setUser({ ...user, name });
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
