import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function SiteLayout() {
  const location = useLocation();

  return (
    <div className="site-shell">
      <Header pathname={location.pathname} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
