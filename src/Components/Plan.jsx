import useStep from "../Context/useStepContext";
import "./formField.css";

function Plan() {
  const { on, setOn, toggle, plans, curPlan, setCurPlan } = useStep();

  const planList = plans.map((plan, i) => {
    return (
      <li
        key={plan.id}
        style={{
          backgroundColor:
            plan.id === curPlan ? "hsl(217, 100%, 97%)" : "white",
        }}
        onClick={() => {
          setCurPlan(plan.id);
        }}
      >
        <img src={plan.src} alt="icons" />{" "}
        <div>
          <div>
            <span className="span">{plan.plan}</span>
          </div>
          <div className="price">
            ${!on ? `${plan.price}/mo` : `${plan.price * 10}/yr`}
          </div>
          {!on ? <div></div> : <div className="price-bonus">{plan.bonus}</div>}
        </div>
      </li>
    );
  });

  return (
    <div className=" step-2">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      {planList}
      <div className="step-toggle">
        <div
          style={{
            color:
              !on && toggle[0] === "Monthly"
                ? `hsl(213, 96%, 18%)`
                : `hsl(229, 24%, 87%)`,
            transition: "all 0.3s ease-in",
          }}
        >
          {toggle[0]}
        </div>{" "}
        <div className="toggle-cont">
          <label
            className="ball"
            style={{
              transform:
                !on && toggle[0] ? "translateX(0)" : "translateX(100%)",
              transition: "all 0.3s ease-in",
            }}
          >
            <input
              type="checkbox"
              onClick={() => {
                on === false ? setOn(true) : setOn(false);
              }}
            />
          </label>
        </div>{" "}
        <div
          value={toggle[1]}
          style={{
            color:
              on && toggle[1] === "Yearly"
                ? `hsl(213, 96%, 18%)`
                : `hsl(229, 24%, 87%)`,
            transition: "all 0.3s ease-in",
          }}
        >
          {toggle[1]}
        </div>
      </div>
    </div>
  );
}

export default Plan;
