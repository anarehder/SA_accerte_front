import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FirewallPage from "./pages/FirewallPage";
import LinksPage from "./pages/LinksPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/firewall" element={<FirewallPage />} />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
    </>
  );
}

export default App;