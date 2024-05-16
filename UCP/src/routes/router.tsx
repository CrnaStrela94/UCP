import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Start";
import MakeProfile from "./MakeProfile";
import Connect from "./Connect";
import Find from "./Find";
import Root from "./Root";

function AppRouter() {
    return (

        <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/Start" element={<Start />} />
            <Route path="/MakeProfile" element={<MakeProfile />} />
            <Route path="/Connect" element={<Connect />} />
            <Route path="/Find" element={<Find />} />
        </Routes>

    );
}

export default AppRouter;