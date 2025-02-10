import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home">
      <div className="mb-4">
        <CourseStatus />
        <Modules />
      </div>
      <div>
      </div>
    </div>
  );
}
