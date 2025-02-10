import { RiAddBoxLine } from "react-icons/ri";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <RiAddBoxLine />
      <IoEllipsisVertical className="fs-4" />
    </div> );}