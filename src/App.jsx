import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import TestResult from "./pages/TestResult";
import { useEffect } from "react";
import ReactGA4 from "react-ga4";

export const base_url = "https://www.haeji1124.shop";

function App() {
  useEffect(() => {
    ReactGA4.initialize([
      {
        trackingId: "G-P9TKRVBTTW",
        gaOptions: {
          siteSpeedSampleRate: 100,
        },
      },
    ]);
  }, []);
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
