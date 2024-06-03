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
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
