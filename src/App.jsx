import UserForm from "./component/UserForm";
import RoutingEx from "./component/router/RoutingEx";
import UseRefEx from "./component/Hooks/UseRefEx";
import CompC from "./component/propdrillingEx/CompC";
import CompB from "./component/propdrillingEx/CompB";
import CounterEx from "./component/custonHookEx/CounterEx";
import { Routes, Route } from "react-router-dom";
import HookLayout from "./component/Hooks/HookLayout";
import HookUseState from "./component/Hooks/HookUseState";
import HookUseEffect from "./component/Hooks/HookUseEffect";
import HookUsereducer from "./component/Hooks/HookUsereducer";
import ContextApi from "./component/Hooks/ContextApi";
import HookUseMemo from "./component/Hooks/HookUseMemo";
import Parent from "./component/Hooks/UseCallback/Parent";
import HookUseTransition from "./component/Hooks/HookUseTransition";
import HookUseLocation from "./component/Hooks/HookUseLocation";
import { lazy, Suspense, useState } from "react";
import ReactHookForm from "./component/ReactHookForm";
import Modal from "./component/PortalEx/Modal";
const LazyLoading = lazy(() => import("./component/LazyLoading"));

const App = () => {
  const [showmodel, setshowmodel] = useState(false);
  return (
    <>
      {/* <RoutingEx />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="userform" element={<UserForm />} />
          <Route path="counter" element={<CounterEx />} />
          <Route path="lazyloading" element={<LazyLoading />} />
          <Route path="hookform" element={<ReactHookForm />} />
          <Route path="/hooks" element={<HookLayout />}>
            <Route index element={<HookUseState />} />
            <Route path="useref" element={<UseRefEx />} />
            <Route path="useeffect" element={<HookUseEffect />} />
            <Route path="usereducer" element={<HookUsereducer />} />
            <Route path="context" element={<ContextApi />} />
            <Route path="usememo" element={<HookUseMemo />} />
            <Route path="callback" element={<Parent />} />
            <Route path="usetransition" element={<HookUseTransition />} />
            <Route path="uselocation" element={<HookUseLocation />} />
          </Route>
        </Routes>
      </Suspense> */}
       <h1>Hello from App</h1>
      <button onClick={() => setshowmodel(true)}>Open Modal</button>
      {showmodel && (
        <Modal>
          <p>This is portal model</p>
      <button onClick={() => setshowmodel(false)}>close Modal</button>

        </Modal>
      )}
    </>
  );
};

export default App;
