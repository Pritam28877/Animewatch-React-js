import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./components/Popular";
import AnimeDetails from "./components/AnimeDetails";
import "./App.css";
import { useGlobalContext } from "./context/apiContext";
import Homepage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
