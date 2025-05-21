import UserForm from "./component/UserForm";
import RoutingEx from "./component/router/RoutingEx";
import UseRefEx from "./component/Hooks/UseRefEx";
import CompC from "./component/propdrillingEx/CompC";
import CompB from "./component/propdrillingEx/CompB";
import CounterEx from "./component/custonHookEx/CounterEx";
import { Routes,Route } from "react-router-dom";
import HookLayout from "./component/Hooks/HookLayout";
import HookUseState from "./component/Hooks/HookUseState";
import HookUseEffect from "./component/Hooks/HookUseEffect";
import HookUsereducer from "./component/Hooks/HookUsereducer";


const App = () => {
  console.log("test");
  return (
    <>
      <RoutingEx />
      <Routes>
        <Route path="userform" element={<UserForm />} />
        <Route path="compc" element={<CompC />} />
        <Route path="compb" element={<CompB />} />
        <Route path="counter" element={<CounterEx />} />
        <Route path="/hooks" element={<HookLayout />} >
        <Route index element={<HookUseState />} />
        <Route path="useref" element={<UseRefEx />} />
        <Route path="useeffect" element={<HookUseEffect />} />
        <Route path="usereducer" element={<HookUsereducer/>} />
      </Route>
      </Routes>
    </>
  );
};

export default App;
