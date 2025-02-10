import { Route, Routes, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Signup from "./Signup";
import Signin from "./Signin";
import Profile from "./Profile";

export default function Account() {
  return (
    <div id="wd-account-screen" className="row wd-sub-navigation">
      <div className="col-2">
        <AccountNavigation />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}
