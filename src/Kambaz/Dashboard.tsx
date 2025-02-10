import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title" className="mt-4">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published" className="mt-4">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row mt-4">
        <div className="wd-dashboard-course col-xl-3 col-lg-4 col-md-6 mb-4">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none">
            <div className="card">
              <img src="/images/react.png" className="card-img-top" alt="React JS Course" />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course col-xl-3 col-lg-4 col-md-6 mb-4">
          <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link text-decoration-none">
            <div className="card">
              <img src="/images/nodejs.png" className="card-img-top" alt="Node.js Course" />
              <div className="card-body">
                <h5 className="card-title">CS2345 Node.js</h5>
                <p className="card-text wd-dashboard-course-title">
                  Server Side Development
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course col-xl-3 col-lg-4 col-md-6 mb-4">
          <Link to="/Kambaz/Courses/3456/Home"
                className="wd-dashboard-course-link text-decoration-none">
            <div className="card">
              <img src="/images/db.png" className="card-img-top" alt="Database Course" />
              <div className="card-body">
                <h5 className="card-title">CS3456 Database Design</h5>
                <p className="card-text wd-dashboard-course-title">
                  Database Systems and SQL
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
