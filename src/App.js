import { Route, Routes } from "react-router-dom";
import Api from "./components/Api";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Api />} exact />

      </Routes>
    </>
  );
}

export default App; 
