import { Form, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [assignment, setAssignment] = useState<any>(null);
  const { cid, aid } = useParams();

  useEffect(() => {
    const selectedAssignment = assignments.find((assignment) => assignment._id === aid);
    setAssignment(selectedAssignment || null);
  }, [aid]);


  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={4}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-points">
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="wd-ppoints"
              type="number"
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-assignment-group">
            Assignment Group
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              id="wd-assignment-group"
              value={assignment.group}
              onChange={(e) => setAssignment({ ...assignment, group: e.target.value })}
            >
              <option value="assignments">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-display-grade">
            Display Grade as
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              id="wd-display-grade"
              value={assignment.displayGrade}
              onChange={(e) => setAssignment({ ...assignment, displayGrade: e.target.value })}
            >
              <option value="percentage">Percentage</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-submission-type">
            Submission Type
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              id="wd-submission-type"
              className="mb-2"
              value={assignment.submissionType}
              onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })}
            >
              <option value="online">Online</option>
            </Form.Select>
            <Form.Check
              type="checkbox"
              id="wd-text-entry"
              label="Text Entry"
              checked={assignment.textEntry}
              onChange={(e) => setAssignment({ ...assignment, textEntry: e.target.checked })}
            />
            <Form.Check
              type="checkbox"
              id="wd-website-url"
              label="Website URL"
              checked={assignment.websiteUrl}
              onChange={(e) => setAssignment({ ...assignment, websiteUrl: e.target.checked })}
            />
            <Form.Check
              type="checkbox"
              id="wd-media-recordings"
              label="Media Recordings"
              checked={assignment.mediaRecordings}
              onChange={(e) => setAssignment({ ...assignment, mediaRecordings: e.target.checked })}
            />
            <Form.Check
              type="checkbox"
              id="wd-student-annotation"
              label="Student Annotation"
              checked={assignment.studentAnnotation}
              onChange={(e) => setAssignment({ ...assignment, studentAnnotation: e.target.checked })}
            />
            <Form.Check
              type="checkbox"
              id="wd-file-uploads"
              label="File Uploads"
              checked={assignment.fileUploads}
              onChange={(e) => setAssignment({ ...assignment, fileUploads: e.target.checked })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-assign-to">
            Assign to
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              id="wd-assign-to"
              value={assignment.assignTo}
              onChange={(e) => setAssignment({ ...assignment, assignTo: e.target.value })}
            >
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
              value={assignment.dueDate}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
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
              value={assignment.availableFrom}
              onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
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
              value={assignment.until}
              onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
            />
          </Col>
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2">Cancel</Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="primary">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
