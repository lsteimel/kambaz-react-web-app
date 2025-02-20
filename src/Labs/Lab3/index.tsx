import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import ArrowFunctions from "./ArrowFunctions";
import LegacyFunctions from "./LegacyFunctions";
import TernaryOperator from "./TernaryOperator";
import ImpliedReturn from "./ImpliedReturn";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import House from "./House";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";

export default function Lab3() {
  console.log('Hello World!');

  return (
    <div id="wd-lab3">
      <h3>Lab 3: JavaScript</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <ArrowFunctions />
      <LegacyFunctions />
      <TernaryOperator />
      <ImpliedReturn />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <House />
      <Add a={3} b={4} />

      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />

      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
    </div>
  );
}
