import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipePage from "../pages/CreateRecipePage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import RecipePage from "../pages/RecipePage";
import SignUpPage from "../pages/SignUpPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FeedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/recipe/create" element={<CreateRecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}
