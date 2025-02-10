import { Form, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control id="wd-name" value="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={4}
            value="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments link to the Kanbas application links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-points">
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control id="wd-points" type="number" value={100} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-assignment-group">
            Assignment Group
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-assignment-group">
              <option value="assignments">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-display-grade">
            Display Grade as
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-display-grade">
              <option value="percentage">Percentage</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-submission-type">
            Submission Type
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-submission-type" className="mb-2">
              <option value="online">Online</option>
            </Form.Select>
            <Form.Check
              type="checkbox"
              id="wd-text-entry"
              label="Text Entry"
            />
            <Form.Check
              type="checkbox"
              id="wd-website-url"
              label="Website URL"
            />
            <Form.Check
              type="checkbox"
              id="wd-media-recordings"
              label="Media Recordings"
            />
            <Form.Check
              type="checkbox"
              id="wd-student-annotation"
              label="Student Annotation"
            />
            <Form.Check
              type="checkbox"
              id="wd-file-uploads"
              label="File Uploads"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-assign-to">
            Assign to
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-assign-to">
              <option value="everyone">Everyone</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-due-date">
            Due
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="wd-due-date"
              type="date"
              value="2024-05-13"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-available-from">
            Available from
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="wd-available-from"
              type="date"
              value="2024-05-06"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-until">
            Until
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="wd-until"
              type="date"
              value="2024-05-28"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
