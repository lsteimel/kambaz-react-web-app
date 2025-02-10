import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kambaz from "../Kambaz";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p>Luke Steimel, WebDev Section  02</p>
      <a href="https://github.com/lsteimel/kambaz-react-web-app" id="wd-github">
          GitHub
        </a>
      
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="Kambaz" element={<Kambaz />} />
      </Routes>
    </div>
);}
