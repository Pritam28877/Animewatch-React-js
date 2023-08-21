import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./components/Popular";
import AnimeDetails from "./components/AnimeDetails";
import "./App.css";
import { useGlobalContext } from "./context/apiContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/anime/:name" element={<AnimeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
