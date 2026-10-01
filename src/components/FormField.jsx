function FormField({ label, name, type = "text", value, onChange, error, placeholder }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <input
        className={error ? "field__input field__input--error" : "field__input"}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="field__error">{error}</span>}
    </label>
  );
}

export default FormField;
