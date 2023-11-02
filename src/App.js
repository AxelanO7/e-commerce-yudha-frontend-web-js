import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import LogiAdminPage from "./pages/admin/LoginAdminPage";
import LoginPage from "./pages/customer/LoginPage";
import RegisterPage from "./pages/customer/RegisterPage";
import HomePage from "./pages/customer/HomePage";
import EditCustomerPage from "./pages/customer/EditCustomer";
import ListAdmin from "./pages/admin/ListAdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="login-admin" element={<LogiAdminPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="edit-customer" element={<EditCustomerPage />} />
        <Route path="list-admin" element={<ListAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
