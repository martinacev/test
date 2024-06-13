import "./App.css";
import Feedback from "./components/feedback/Feedback";
import Logo from "./components/logo/Logo";
import RateStars from "./components/rateStars/RateStars";
import Title from "./components/title/Title";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Title />
        <RateStars />
        <Feedback />
        <Logo />
      </div>
    </div>
  );
}

export default App;
