import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routesConfig from "./routesConfig";
import MainLayout from './components/Layout/MainLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {routesConfig.map(({ path, element, meta }) => (
          <Route
            key={path}
            path={path}
            element={<MainLayout meta={meta}>{element}</MainLayout>}
          />
        ))}
      </Routes>
    </Router>
  );
}
