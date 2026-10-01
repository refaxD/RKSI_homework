import Button from "../components/Button";

function NotFound() {
  return (
    <section className="page not-found">
      <p className="not-found__code">404</p>
      <h1>Страница не найдена</h1>
      <p>Похоже, такой страницы нет на нашей полке.</p>
      <Button to="/">На главную</Button>
    </section>
  );
}

export default NotFound;
