import "./App.css";
import Body from "./Components/Body";
import { StepContextProvider } from "./Context/StepContext";

function App() {
  return (
    <StepContextProvider>
      <Body />
    </StepContextProvider>
  );
}

export default App;
