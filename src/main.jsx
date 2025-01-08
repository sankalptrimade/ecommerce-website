import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import CategoryNavigation from "./components/CategoryNavigation";
import HelpCenterComponent from "./components/helpCenterComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/NavbarComponents/About";
import Contact from "./components/NavbarComponents/Contact";
import CallUs from "./components/NavbarComponents/CallUs";
import HelpCenter from "./components/NavbarComponents/HelpCenter";
import HomePage from "./components/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Heading />
      <CategoryNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/callUs" element={<CallUs />} />
        <Route path="/helpCenter" element={<HelpCenter />} />
      </Routes>
      <HelpCenterComponent />
      <FooterComponent />
    </BrowserRouter>
  </StrictMode>
);
