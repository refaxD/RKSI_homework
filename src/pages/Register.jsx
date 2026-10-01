import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormField from "../components/FormField";
import Button from "../components/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Введите имя";
  }
  if (!EMAIL_PATTERN.test(form.email)) {
    errors.email = "Введите корректный email, например name@mail.ru";
  }
  if (form.password.length < 6) {
    errors.password = "Пароль должен быть не короче 6 символов";
  }
  if (form.confirm !== form.password) {
    errors.confirm = "Пароли не совпадают";
  }

  return errors;
}

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const error = register({
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password,
    });

    if (error) {
      setFormError(error);
      return;
    }

    navigate("/account");
  }

  return (
    <section className="page auth">
      <h1>Регистрация</h1>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <FormField label="Имя" name="name" value={form.name} onChange={handleChange} error={errors.name} />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="name@mail.ru"
        />
        <FormField
          label="Пароль"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormField
          label="Повторите пароль"
          name="confirm"
          type="password"
          value={form.confirm}
          onChange={handleChange}
          error={errors.confirm}
        />

        {formError && <p className="form__error">{formError}</p>}

        <Button type="submit">Зарегистрироваться</Button>
      </form>

      <p className="auth__hint">
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </section>
  );
}

export default Register;
