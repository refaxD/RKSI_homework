function Loader({ text = "Загрузка..." }) {
  return (
    <div className="loader">
      <span className="loader__spinner" />
      <p>{text}</p>
    </div>
  );
}

export default Loader;
