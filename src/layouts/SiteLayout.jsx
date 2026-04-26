import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function SiteLayout() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

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
