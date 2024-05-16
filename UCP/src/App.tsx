import "./App.css";
import RoundButton from "./components/btn/btn";

function App() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <p>knas</p>
      <RoundButton svg="connect" onClick={handleClick} />
      <RoundButton svg="abbort" onClick={handleClick} />
      <RoundButton svg="message" onClick={handleClick} />
    </>
  );
}

export default App;
