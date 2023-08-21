import { BrowserRouter } from "react-router-dom";
import Popular from "./components/Popular";
import "./App.css";
import { useGlobalContext } from "./context/apiContext";

function App() {
  return (
    <BrowserRouter>
      <>
        <Popular />
      </>
    </BrowserRouter>
  );
}

export default App;
