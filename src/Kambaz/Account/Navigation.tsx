import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-account-signin-link"
        className={`list-group-item list-group-item-action border-0 ${pathname.includes("/Signin") ? "active" : "text-danger"}`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>Sign In</span>
          <i className="bi bi-arrow-right"></i>
        </div>
      </Link>
      <Link
        to="/Kambaz/Account/Signup" 
        id="wd-account-signup-link"
        className={`list-group-item list-group-item-action border-0 ${pathname.includes("/Signup") ? "active" : "text-danger"}`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>Sign Up</span>
          <i className="bi bi-arrow-right"></i>
        </div>
      </Link>
      <Link
        to="/Kambaz/Account/Profile"
        id="wd-account-profile-link"
        className={`list-group-item list-group-item-action border-0 ${pathname.includes("/Profile") ? "active" : "text-danger"}`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>Profile</span>
          <i className="bi bi-arrow-right"></i>
        </div>
      </Link>
    </div>
  );
}
