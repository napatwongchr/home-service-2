import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ServiceList from "./pages/ServiceList";
import LoginPage from "./pages/LoginPage";
import AdminDashboardPage from "./pages/Admin/AdminDashBoard";
import CreateServiceCategory from "./components/ServiceCategory/CreateServiceCategory";
import EditServiceCategory from "./components/ServiceCategory/EditServiceCategory";
import DetailServiceCategory from "./components/ServiceCategory/DetailServiceCategory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service-list" element={<ServiceList />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      <Route
        path="/admin-dashboard/category/create"
        element={<CreateServiceCategory />}
      />
      <Route
        path="/admin-dashboard/category/edit"
        element={<EditServiceCategory />}
      />
      <Route
        path="/admin-dashboard/category/detail"
        element={<DetailServiceCategory />}
      />
    </Routes>
  );
}

export default App;
