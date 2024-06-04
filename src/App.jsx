import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetails from "./pages/ServiceDetails";
import TeamPage from "./pages/TeamPage";
import TeamDetails from "./pages/TeamDetails";
import Portfolio from "./pages/Portfolio";
import Portfoliodetails from "./pages/Portfoliodetails";
import PricingPage from "./pages/PricingPage";
import TestimonialPage from "./pages/TestimonialPage";
import FAQPage from "./pages/FAQPage";
import ShopPage from "./pages/ShopPage";
import Product from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/servicedetail" element={<ServiceDetails />} />
      <Route path="/teams" element={<TeamPage />} />
      <Route path="/teamdetails" element={<TeamDetails />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfoliodetails" element={<Portfoliodetails />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/testimonial" element={<TestimonialPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product" element={<Product />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
