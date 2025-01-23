import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router";
import { Routes } from "react-router";
import { Navigate } from "react-router";
export default function App() {
 return (
  <HashRouter>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Kambaz"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kambaz/*" element={<Kambaz />} />
    </Routes>
   </div>
  </HashRouter>
);}
