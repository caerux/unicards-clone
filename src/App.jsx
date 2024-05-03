import "./App.css";
import VideoBackground from "./components/VideoBackground";
import ScrollingText from "./components/ScrollingText";
import OnePercent from "./components/OnePercent";
import FiveX from "./components/FiveX";
import Zero from "./components/Zero";
import BlackSection from "./components/BlackSection";
import LifetimeFree from "./components/LifetimeFree";

function App() {
  return (
    <div className="App">
      <VideoBackground />

      <ScrollingText />
      <OnePercent />
      <FiveX />
      <Zero />
      <LifetimeFree/>
      <BlackSection />
    </div>
  );
}

export default App;
