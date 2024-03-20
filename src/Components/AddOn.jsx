import "./formField.css";

import useStep from "../Context/useStepContext";

function AddOn() {
  const { on, addOns, setAddOns } = useStep();
  const checkBox = (id) => {
    setAddOns((prev) => {
      return prev.map((addOn) => {
        if (addOn.id === id) {
          return { ...addOn, checked: !addOn.checked };
        } else {
          return { ...addOn };
        }
      });
    });
  };
  const displayAddOns = addOns.map((addOn) => {
    return (
      <li
        key={addOn.id}
        style={{
          backgroundColor: addOn.checked ? "hsl(217, 100%, 97%)" : "white",
        }}
      >
        <div>
          <input
            id={addOn.id}
            type="checkbox"
            checked={addOn.checked}
            style={{ width: "20px", height: "20px" }}
            onChange={() => {
              checkBox(addOn.id);
            }}
          />
        </div>{" "}
        <div className="add-price">
          <div>
            <span className="span">{addOn.addOn}</span>
          </div>
          <div className="price">{addOn.desc}/mo</div>
        </div>
        <div className="price" style={{ color: `hsl(206, 94%, 87%)` }}>
          +${!on ? `${addOn.price}/mo` : `${addOn.price * 10}/yr`}
        </div>
      </li>
    );
  });
  return (
    <div className=" step-3">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      {displayAddOns}
    </div>
  );
}

export default AddOn;
