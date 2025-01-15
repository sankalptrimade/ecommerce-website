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
import ShippingAndReturnsComponent from "./components/FooterComponents/ShippingAndReturnsComponent";
import TermsAndConditionsComponent from "./components/FooterComponents/TermsAndConditionsComponent";
import ShowProductComponent from "./components/Products Component/ShowProductComponent";


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
        <Route path="/shippingAndReturns" element={<ShippingAndReturnsComponent />} />
        <Route path="/termsAndConditions" element={<TermsAndConditionsComponent />} />
        {/* <Route path="/paymentMethods" element={<PaymentsMethod />} /> */}
        <Route path="/helpCenter" element={<HelpCenter category="smartphones" />} />
        <Route path="/smartPhones" element={<ShowProductComponent category="smartphones" heading="Mobile" />} />
        <Route path="/laptops" element={<ShowProductComponent category="laptops" heading="Laptop"  />} />
        <Route path="/tablets" element={<ShowProductComponent category="tablets" heading="Tablet" />}  />
        <Route path="/mobileAccessories" element={<ShowProductComponent category="mobile-accessories" heading="Accessories" />} />
      </Routes>
      <HelpCenterComponent />
      <FooterComponent />
    </BrowserRouter>
  </StrictMode>
);


