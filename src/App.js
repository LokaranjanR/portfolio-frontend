import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import PortfolioItemDetail from "./components/PortfolioItemDetail";
// import PortfolioItemList from "./components/PortfolioItemList";
import PortfolioItemForm from "./components/PortfolioItemForm";
import PortfolioItemList from "./components/PortfolioItemList";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";


export default function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<PortfolioItemForm />} />
          <Route path="/view" element={<PortfolioItemList />} />

        </Routes>
        <Navigation />
      </div>
    </Router>
  );

}
