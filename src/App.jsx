import { Navigate, Route, Routes } from "react-router-dom";
import { routeConfig } from "./data/siteData";
import { SiteLayout } from "./layouts/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { BasicPage } from "./pages/BasicPage";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        {routeConfig
          .filter((route) => route.path !== "/")
          .map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<BasicPage page={route} />}
            />
          ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
