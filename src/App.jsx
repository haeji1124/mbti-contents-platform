import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import TestResult from "./pages/TestResult";

export const base_url = "http://localhost:5173";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:testParam" element={<Test />} />
        <Route
          path="/:testParam/result/:resultParam"
          element={<TestResult />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
