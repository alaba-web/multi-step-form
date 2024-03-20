import "./formField.css";
import useStep from "../Context/useStepContext";

function Summary() {
  const { sumFunc, plans, curPlan, on, addOns, setCurStep } = useStep();
  const total = sumFunc() + plans[curPlan - 1].price;

  const renderAddOn = () => {
    return addOns.map((addOn) => {
      if (addOn.checked) {
        return (
          <div className="result" key={addOn.id}>
            <div style={{ color: "hsl(229, 24%, 87%)" }}>{addOn.addOn}</div>
            <div style={{ color: "hsl(213, 96%, 18%)" }}>
              {!on ? `+$${addOn.price}/mo` : `+$${addOn.price * 10}/yr`}
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="step-4">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="step-4a">
        <div key={plans[curPlan - 1].plan}>
          <div className="result plan-result">
            <div>
              <div
                style={{
                  color: "hsl(213, 96%, 18%)",
                  fontWeight: "700",
                  marginBottom: "4px",
                }}
              >
                {plans[curPlan - 1].plan}
                {`${!on ? " (Monthly)" : " (Yearly)"}`}
              </div>
              <div
                className="change"
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => setCurStep(1)}
              >
                Change
              </div>
            </div>
            <div style={{ color: "hsl(213, 96%, 18%)", fontWeight: "700" }}>
              {!on
                ? `$${plans[curPlan - 1].price}/mo`
                : `$${plans[curPlan - 1].price * 10}/yr`}
            </div>
          </div>
        </div>
        {renderAddOn()}
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="total">
        <div style={{ color: "hsl(229, 24%, 87%)" }}>
          Total (per {!on ? "month" : "year"})
        </div>
        <div style={{ color: "hsl(243, 100%, 62%)", fontWeight: "700" }}>
          ${!on ? `${total}/mo` : `${total * 10}/yr`}
        </div>
      </div>
    </div>
  );
}
export default Summary;
