import UserForm from "./component/UserForm";
import RoutingEx from "./component/router/RoutingEx";
import UseRefEx from "./component/UseRefEx";
import CompC from "./component/propdrillingEx/CompC";
import CompB from "./component/propdrillingEx/CompB";
import CounterEx from "./component/custonHookEx/CounterEx";
import { Routes,Route } from "react-router-dom";
import Pages from "./component/nestedRoute/Pages";
import Home from "./component/nestedRoute/Home";
import About from "./component/nestedRoute/About";
import Profile from "./component/nestedRoute/Profile";
import Dashboard from "./component/nestedRoute/Dashboard";

const App = () => {
  console.log("test");
  return (
    <>
      <RoutingEx />
      <Routes>
        <Route path="userform" element={<UserForm />} />
        <Route path="useref" element={<UseRefEx />} />
        <Route path="compc" element={<CompC />} />
        <Route path="compb" element={<CompB />} />
        <Route path="counter" element={<CounterEx />} />
        <Route path="/pages" element={<Pages/>}>
        <Route path="home" element={<Home/>}>
        <Route path="profile" element={<Profile/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        </Route>
        <Route path="about" element={<About/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
