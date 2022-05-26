import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import TripDetailsPage from "../pages/TripDetailsPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/admin"} element={<AdminPage />} />
          <Route path={"/trip-details/:id"} element={<TripDetailsPage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
