import { Link } from "react-router-dom";

// Если передан to — кнопка рендерится как ссылка роутера, иначе как обычная <button>
function Button({ children, to, variant = "primary", type = "button", onClick, disabled }) {
  const className = `btn btn--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
