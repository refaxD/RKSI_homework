import { useParams } from "react-router-dom";

function BookPage() {
  const { id } = useParams();

  return (
    <section className="page">
      <h1>Книга №{id}</h1>
    </section>
  );
}

export default BookPage;
