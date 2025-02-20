import { ListGroup, Button, Form, InputGroup, Row, Col, Container } from "react-bootstrap";
import LessonControlButtons from "../Modules/ModuleControlButtons";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { assignments } from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <Container id="wd-assignments" className="p-4">
      <Row className="mb-3">
        <Col>
          <InputGroup>
            <InputGroup.Text>
              <AiOutlineSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search for Assignments"
              id="wd-search-assignment"
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Button variant="secondary" className="me-2">
            <IoMdAdd className="me-1" />Group
          </Button>
          <Button variant="danger">
            <IoMdAdd className="me-1" />Assignment
          </Button>
        </Col>
      </Row>

      <div className="mb-4">
        <Row className="align-items-center">
          <Col>
            <h5 className="mb-0">ASSIGNMENTS 40% of Total</h5>
          </Col>
          <Col xs="auto">
            <Button variant="secondary">
              <IoMdAdd />
            </Button>
          </Col>
        </Row>
      </div>

      <ListGroup>
        {courseAssignments.map((assignment) => (
          <ListGroup.Item key={assignment._id} className="border-start border-success border-3 p-3">
            <div className="d-flex">
              <IoReorderThreeOutline className="me-2 fs-4" />
              <div className="flex-grow-1">
                <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  className="text-danger text-decoration-none fw-bold mb-2 d-block">
                  {assignment.title}
                </a>
                <div className="text-secondary small">
                  Multiple Modules | <strong>Not available until</strong> TBD | 
                  <strong>Due</strong> TBD | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
