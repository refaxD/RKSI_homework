function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Книжная полка. Учебный проект по React.</p>
      </div>
    </footer>
  );
}

export default Footer;
