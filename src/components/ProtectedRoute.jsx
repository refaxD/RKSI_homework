import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Гостя отправляем на вход и запоминаем, куда он хотел попасть, чтобы вернуть его туда после входа
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
