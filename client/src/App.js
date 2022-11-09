import { Routes, Route, Router } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ServiceList from "./pages/ServiceList";
import LoginPage from "./pages/LoginPage";
import AdminDashboardPage from "./pages/Admin/AdminDashBoard";
import AdminCreateService from "./pages/Admin/AdminCreateService";
import AdminServiceListPage from "./pages/Admin/AdminServiceLists";
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
      <Route path="/admin-service" element={<AdminServiceListPage />} />
      <Route
        path="/admin-dashboard-create-service"
        element={<AdminCreateService />}
      />
      <Route
        path="/admin-dashboard/category/create"
        element={<CreateServiceCategory />}
      />
      <Route
        path="/admin-dashboard/category/edit/:categoryId"
        element={<EditServiceCategory />}
      />
      <Route
        path="/admin-dashboard/category/view/:categoryId"
        element={<DetailServiceCategory />}
      />
    </Routes>
  );
}

export default App;
