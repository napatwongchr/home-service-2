import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ServiceList from "./pages/ServiceList";
import LoginPage from "./pages/LoginPage";
import ViewServiceCategory from "./components/ServiceCategory/ViewServiceCategory";
import CreateServiceCategory from "./components/ServiceCategory/CreateServiceCategory";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/service-list" element={<ServiceList />} />
    //   <Route path="/register" element={<RegisterPage />} />
    //   <Route path="/login" element={<LoginPage />} />
    // </Routes>
    <CreateServiceCategory />
  );
}

export default App;
