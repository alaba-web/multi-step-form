import { useContext } from "react";
import { StepContext } from "./StepContext";

function useStep() {
  const context = useContext(StepContext);
  return context;
}

export default useStep;
