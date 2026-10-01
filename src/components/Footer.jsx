const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Книжная полка. Учебный проект по React.</p>
      </div>
    </footer>
  );
}

export default Footer;
