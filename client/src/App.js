import { Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage'
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;

