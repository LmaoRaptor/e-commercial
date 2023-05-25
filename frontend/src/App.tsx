import { useEffect, useState } from "react";
import "./App.css";
import Register from "./pages/guest/Register";
import Community from "./pages/staff/StaffProductListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StaffProductList from "./pages/staff/StaffProductListPage";
import StaffProductListPage from "./pages/staff/StaffProductListPage";
import { HttpUser } from "./services/user-service";
import StaffPage from "./pages/staff/StaffPage";
import UserDTO from "./type/UserDTO";
import GuestPage from "./pages/guest/GuestPage";

function App() {
  const [user, setUser] = useState<UserDTO | null>(null);
  if (user == null) {
    const userJSON = sessionStorage.getItem("USER");
    if (userJSON) setUser(JSON.parse(userJSON) as UserDTO);
  }

  if (user == null) {
    return <GuestPage />;
  }
  if (user.authority == "ROLE_STAFF") {
    return <StaffPage />;
  }

  return <div>Welcome to the community</div>;
}

export default App;
