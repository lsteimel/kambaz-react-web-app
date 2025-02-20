import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { ListGroup } from "react-bootstrap";
import { modules } from "../../Database";
import { useParams } from "react-router";

export default function Modules() {
  const { cid } = useParams();
  const courseModules = modules.filter((module) => module.course === cid);

  return (
    <div>
      <ListGroup id="wd-modules">
        {courseModules.map((module) => (
          <ListGroup.Item key={module._id} className="wd-module p-3 ps-1 border-top mt-3">
            <div className="wd-title p-4 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons && module.lessons.map((lesson) => (
                <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
