import "./App.css";
import { Home } from "./components/home";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/ravi/landingPage";
import { StartProject } from "./components/startProject";
import { StartForm } from "./components/startform";
import { StartForm2 } from "./components/startform2";
import { Payment } from "./components/payment";
import { Login } from "./pages/Login";
import Addhomee from "./pages/Createpage";
import {Register} from "./pages/Register";
import Projectlist from "./pages/Projectlist";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<LandingPage />}></Route>
        <Route path="/startproject" element={<StartProject />}></Route>
        <Route path="/form" element={<StartForm />}></Route>
        <Route path="/form2" element={<StartForm2 />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createpage" element={<Addhomee />}></Route>
        <Route path="/projectlist" element={<Projectlist/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
