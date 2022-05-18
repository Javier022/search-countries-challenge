import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import CountrySearchPage from "pages/CountrySearchPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountrySearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
