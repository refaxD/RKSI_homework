import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function readFavorites(key) {
  if (!key) {
    return [];
  }
  return JSON.parse(localStorage.getItem(key) || "[]");
}

export function useFavorites() {
  const { user } = useAuth();
  const key = user ? `favorites:${user.email}` : null;
  const [favorites, setFavorites] = useState(() => readFavorites(key));

  useEffect(() => {
    if (key) {
      localStorage.setItem(key, JSON.stringify(favorites));
    }
  }, [key, favorites]);

  function toggleFavorite(bookId) {
    setFavorites((prev) =>
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId],
    );
  }

  return { favorites, toggleFavorite };
}
