
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/admin/auth/Login";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
    </Routes>
  );
};
export default AdminRoutes;
