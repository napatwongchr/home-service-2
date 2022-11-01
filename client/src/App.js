import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage'
import HomePage from "./pages/HomePage";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

