import "./App.css";
import MainContainer from "./components/PersonCard/MainContainer";
import RoundButton from "./components/btn";

function App() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="tempContainer">
        <MainContainer />
        <RoundButton svg="connect" onClick={handleClick} />
        <RoundButton svg="abbort" onClick={handleClick} />
        <RoundButton svg="message" onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
