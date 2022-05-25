import "./App.css";
import DonateWidget from "./components/donate-widget";

function App() {
  return (
    <div className="App">
      <DonateWidget min={5} max={5000} limit={5000} />
    </div>
  );
}

export default App;
