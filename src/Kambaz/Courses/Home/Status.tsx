import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
{/* Find more icons */}
export default function CourseStatus() {
 return (
   <div id="wd-course-status" className="d-flex justify-content-between align-items-start">
     <h2>Course Status</h2>
     <div style={{ width: "700px" }}>
       <div className="d-flex gap-2">
         <Button variant="secondary" size="sm" className="text-nowrap">
           <MdDoNotDisturbAlt className="me-1" /> Unpublish
         </Button>
         <Button variant="success" size="sm" className="text-nowrap">
           <FaCheckCircle className="me-1" /> Publish
         </Button>
         <Button variant="secondary" size="sm" className="text-nowrap">
           <BiImport className="me-1" /> Import Existing Content
         </Button>
         <Button variant="secondary" size="sm" className="text-nowrap">
           <LiaFileImportSolid className="me-1" /> Import from Commons
         </Button>
       </div>
     </div>
   </div>
 );
}