import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/layout";
import Home from "./pages/Home/home";
import NoPage from "./pages/NoPage";
import EyeTest from "./pages/EyeTest/eyeTest";
import Information from "./pages/Information/information";
import MultifocalLenses from "./pages/MultifocalLenses/multifocalLenses";
import SingleVisionLenses from "./pages/SingleVisionLenses/singleVisionLenses";
import Contact from "./pages/Contact/contact";







function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
              <Route path="eyeTest" element={<EyeTest />} />
              <Route path="multifocalLenses" element={<MultifocalLenses />} />
              <Route path="singleVisionLenses" element={<SingleVisionLenses />} />
              <Route path="contact" element={<Contact />} />
              <Route path="information" element={<Information />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
