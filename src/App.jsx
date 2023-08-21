import Popular from "./components/Popular";
import "./App.css";
import { useGlobalContext } from "./context/apiContext";

function App() {
  const global = useGlobalContext();
  console.log(global);
  return (
    <>
      <Popular />
    </>
  );
}

export default App;
