import React from "react";
import useStep from "../Context/useStepContext.js";
import "./sideBar.css";
import "./body.css";
import FormField from "./FormFields.jsx";
import Plan from "./Plan.jsx";
import AddOn from "./AddOn.jsx";
import Summary from "./Summary.jsx";
// import { useFormikContext } from "formik";
import Finish from "./Finish.jsx";

const finish = 4;

const showStep = (step) => {
  switch (step) {
    case 0:
      return <FormField />;

    case 1:
      return <Plan />;

    case 2:
      return <AddOn />;

    case 3:
      return <Summary />;
    case 4:
      return <Finish />;
    default:
      return <FormField />;
  }
};

function SideBar() {
  const { active, curStep, headers } = useStep();
  // const addActive = curStep ? setActive(active) : setActive(" active num");

  // const [step, setStep] = useState(1);
  const displaySteps = headers.map((header, i) => {
    return (
      <div className="step-box" key={i}>
        <li className={`num ${curStep === i ? active : "num"}`} key={i}>
          {i + 1}
        </li>
        <div>
          <span className="step-span">STEP {i + 1}</span>
          <div className="step-plans">{header} </div>
        </div>
      </div>
    );
  });

  return <ul className="side-bar">{displaySteps}</ul>;
}

function Footer() {
  const { curStep, setCurStep, headers, userData } = useStep();

  // const handleClick = () => {
  //   submitForm();
  // };
  return (
    <div className="footer">
      <button
        style={{ opacity: curStep === 0 ? 0 : 1 }}
        className="btn-left"
        disabled={curStep === 0}
        onClick={() => {
          setCurStep((curStep) => curStep - 1);
        }}
      >
        Go Back
      </button>
      <button
        type={curStep === headers.length - 1 ? `submit` : `button`}
        className="btn-right"
        onClick={() => {
          if (curStep === headers.length) {
            showStep(4);

            console.log(userData);
          } else {
            setCurStep((curStep) => curStep + 1);
          }
        }}
      >
        {curStep === headers.length - 1 ? `Confirm` : `Next Step`}
      </button>
    </div>
  );
}

function Body() {
  const { curStep, headers } = useStep();

  return (
    <div className="container">
      <SideBar />
      <div className="body">
        {curStep !== headers.length ? showStep(curStep) : showStep(4)}
      </div>
      {curStep !== headers.length && <Footer />}
    </div>
  );
}

export default Body;
