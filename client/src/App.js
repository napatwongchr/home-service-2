import { Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage'
import HomePage from "./pages/HomePage";
import ServiceList from "./pages/ServiceList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service-list" element={<ServiceList />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;

