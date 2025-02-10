import { ListGroup, Button, Form, InputGroup, Row, Col, Container } from "react-bootstrap";
import LessonControlButtons from "../Modules/ModuleControlButtons";

import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

export default function Assignments() {
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
        <ListGroup.Item className="border-start border-success border-3 p-3">
          <div className="d-flex">
            <IoReorderThreeOutline className="me-2 fs-4" />
            <div className="flex-grow-1">
              <a href="#/Kambaz/Courses/1234/Assignments/123"
                className="text-danger text-decoration-none fw-bold mb-2 d-block">
                A1 - ENV + HTML
              </a>
              <div className="text-secondary small">
                Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | 
                <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </div>
            </div>
            <LessonControlButtons />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="border-start border-success border-3 p-3">
          <div className="d-flex">
            <IoReorderThreeOutline className="me-2 fs-4" />
            <div className="flex-grow-1">
              <a href="#/Kambaz/Courses/1234/Assignments/124"
                className="text-danger text-decoration-none fw-bold mb-2 d-block">
                A2 - CSS + BOOTSTRAP
              </a>
              <div className="text-secondary small">
                Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | 
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </div>
            </div>
            <LessonControlButtons />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="border-start border-success border-3 p-3">
          <div className="d-flex">
            <IoReorderThreeOutline className="me-2 fs-4" />
            <div className="flex-grow-1">
              <a href="#/Kambaz/Courses/1234/Assignments/125"
                className="text-danger text-decoration-none fw-bold mb-2 d-block">
                A3 - JAVASCRIPT + REACT
              </a>
              <div className="text-secondary small">
                Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | 
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
            </div>
            <LessonControlButtons />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
