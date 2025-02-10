import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation" 
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black"
         style={{ width: 120, zIndex: 1000 }}>
      <a href="https://www.northeastern.edu/" 
         id="wd-neu-link" 
         target="_blank" 
         className="list-group-item bg-black border-0 text-center p-3">
        <img src="/images/NEU.png" alt="NEU Logo" width={60} />
      </a>
      <Link to="/Kambaz/Account" 
            id="wd-account-link" 
            className="list-group-item text-center border-0 bg-black text-white p-3">
        <FaRegCircleUser className="fs-1" />
        <div>Account</div>
      </Link>
      <Link to="/Kambaz/Dashboard" 
            id="wd-dashboard-link" 
            className="list-group-item text-center border-0 bg-black text-white p-3">
        <AiOutlineDashboard className="fs-1 text-danger" />
        <div>Dashboard</div>
      </Link>
      <Link to="/Kambaz/Courses" 
            id="wd-course-link" 
            className="list-group-item text-center border-0 bg-black text-white p-3">
        <LiaBookSolid className="fs-1 text-danger" />
        <div>Courses</div>
      </Link>
      <Link to="/Kambaz/Calendar" 
            id="wd-calendar-link" 
            className="list-group-item text-center border-0 bg-black text-white p-3">
        <IoCalendarOutline className="fs-1 text-danger" />
        <div>Calendar</div>
      </Link>
      <Link to="/Kambaz/Inbox" 
            id="wd-inbox-link" 
            className="list-group-item text-center border-0 bg-black text-white p-3">
        <FaInbox className="fs-1 text-danger" />
        <div>Inbox</div>
      </Link>
      <Link to="/Labs" 
            id="wd-labs-link" 
            className="list-group-item text-center border-0 bg-black text-white p-3">
        <LiaCogSolid className="fs-1 text-danger" />
        <div>Labs</div>
      </Link>
    </div>
  );
}
