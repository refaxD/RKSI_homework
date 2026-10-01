import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import FormField from "../components/FormField";
import Button from "../components/Button";

function Profile() {
  const { user, updateName } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [error, setError] = useState("");

  const registeredAt = new Date(user.createdAt).toLocaleDateString("ru-RU");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Имя не может быть пустым");
      return;
    }

    updateName(name.trim());
    setError("");
    setIsEditing(false);
  }

  function handleCancel() {
    setName(user.name);
    setError("");
    setIsEditing(false);
  }

  return (
    <div>
      <h1>Профиль</h1>

      {isEditing ? (
        <form className="form profile__form" onSubmit={handleSubmit} noValidate>
          <FormField
            label="Имя"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={error}
          />
          <div className="book__actions">
            <Button type="submit">Сохранить</Button>
            <Button variant="outline" onClick={handleCancel}>
              Отмена
            </Button>
          </div>
        </form>
      ) : (
        <>
          <dl className="profile">
            <dt>Имя</dt>
            <dd>{user.name}</dd>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>С нами с</dt>
            <dd>{registeredAt}</dd>
          </dl>
          <Button variant="outline" onClick={() => setIsEditing(true)}>
            Изменить имя
          </Button>
        </>
      )}
    </div>
  );
}

export default Profile;
