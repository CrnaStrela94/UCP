import "./App.css";
import RoundButton from "./components/btn";

function App() {
  return (
    <>
      <p>knas</p>
      <RoundButton svg={<svg />} onClick={() => console.log("click")} />
      <RoundButton svg={<svg />} onClick={() => console.log("click")} />
      <RoundButton svg={<svg />} onClick={() => console.log("click")} />

    </>
  );
}

export default App;
