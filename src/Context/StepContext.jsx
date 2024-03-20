import { useState, createContext } from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advance from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const StepContext = createContext();

function StepContextProvider({ children }) {
  const [on, setOn] = useState(false);
  const [toggle, setToggle] = useState(["Monthly", "Yearly"]);
  const [curStep, setCurStep] = useState(0);
  const [curPlan, setCurPlan] = useState(1);
  const [active, setActive] = useState("active");
  const headers = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telephone: "",
  });

  const [plans] = useState([
    {
      id: 1,
      plan: "Arcade",
      price: !on ? 9 : 90,
      src: arcade,
      bonus: "2 months free",
    },
    {
      id: 2,
      plan: "Advanced",
      price: !on ? 12 : 120,
      src: advance,
      bonus: "2 months free",
    },
    {
      id: 3,
      plan: "Pro",
      price: !on ? 15 : 150,
      src: pro,
      bonus: "2 months free",
    },
  ]);
  const [addOns, setAddOns] = useState([
    {
      id: 1,
      addOn: "Online service",
      desc: "Access to multiplayer games",
      price: !on ? 1 : 10,
      checked: true,
    },
    {
      id: 2,
      addOn: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: !on ? 2 : 20,
      checked: false,
    },
    {
      id: 3,
      addOn: "Customizable profile",
      desc: "Custom theme on your profile",
      price: !on ? 2 : 20,
      checked: false,
    },
  ]);

  // onst [planData, setPlanData] = useState({
  //   pack: "",
  //   plan: plans[curPlan].price,
  //   period: "",
  // });c

  // addon summary function

  const sumFunc = () =>
    addOns
      .filter((addOn) => addOn.checked)
      .reduce((acc, cur) => acc + cur.price, 0);

  const handleBlur = () => {
    if (user.name === "") {
      setUserErrors({
        ...userErrors,
        name: "This field is required",
      });
    }
    if (user.email === "" && !user.email.includes("@")) {
      setUserErrors({
        ...userErrors,
        email: "This field is required",
      });
    }
    if (user.telephone === "") {
      setUserErrors({
        ...userErrors,
        telephone: "This field is required",
      });
    }
  };

  return (
    <StepContext.Provider
      value={{
        userData,
        setUserData,
        sumFunc,
        handleBlur,
        active,
        setActive,
        headers,
        curStep,
        setCurStep,
        toggle,
        setToggle,
        on,
        setOn,
        curPlan,
        setCurPlan,
        plans,
        addOns,
        setAddOns,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export { StepContextProvider, StepContext };
