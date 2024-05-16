import "./App.css";
import RoundButton from "./components/btn/btn";
import LogIn from "./routes/LogIn";
import Start from "./routes/Start";

function App() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
    <Start/>
      <p>knas</p>
      <RoundButton svg="connect" onClick={handleClick} />
      <RoundButton svg="abbort" onClick={handleClick} />
      <RoundButton svg="message" onClick={handleClick} />
      <LogIn/>
    </>
  );
}

export default App;
