import thank from "../assets/images/icon-thank-you.svg";
import "./finish.css";
function Finish() {
  return (
    <div className="finish">
      <img src={thank} alt="thank you" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Finish;
