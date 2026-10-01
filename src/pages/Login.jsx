import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormField from "../components/FormField";
import Button from "../components/Button";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.email.trim() || !form.password) {
      setError("Заполните email и пароль");
      return;
    }

    const success = login(form.email.trim().toLowerCase(), form.password);

    if (!success) {
      setError("Неверный email или пароль");
      return;
    }

    navigate("/account");
  }

  return (
    <section className="page auth">
      <h1>Вход</h1>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="name@mail.ru"
        />
        <FormField
          label="Пароль"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        {error && <p className="form__error">{error}</p>}

        <Button type="submit">Войти</Button>
      </form>

      <p className="auth__hint">
        Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </p>
    </section>
  );
}

export default Login;
