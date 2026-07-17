import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./RootLayout";
import App from "./App";
import About from "./About";
import Contact from "./Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>,
  ),
);
