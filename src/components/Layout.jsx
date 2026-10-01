import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Общий каркас: шапка и подвал остаются на месте, а страница подставляется в Outlet
function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="container main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
