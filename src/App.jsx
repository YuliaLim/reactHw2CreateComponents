import "./App.css";
import { Suspense, createContext, lazy } from "react";
import { Audio } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";
// import PizzaItemProvider from "./context/PizzaItemProvider"; //for useReducer

const LazyPageNotFound = lazy(() => import("./pages/PageNotFound"));
const LazyUserInfoForm = lazy(() => import("./pages/UserInfoForm"));
const LazyHeader = lazy(() => import("./components/Header"));
const LazyLoginForm = lazy(() => import("./pages/LoginForm"));
const LazyMenu = lazy(() => import("./pages/Menu"));
const LazyBasket = lazy(() => import("./pages/Basket"));
const LazyOrder = lazy(() => import("./pages/Order"));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <Audio
            height="80"
            width="80"
            radius="9"
            color="yellow"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        }
      >
        {/* <PizzaItemProvider>  //for useReducer  */}
        <div className="wrapper">
          <LazyHeader />
        </div>

        <Routes>
          <Route path="" element={<LazyMenu />}></Route>
          <Route path="/login" element={<LazyLoginForm />}></Route>
          <Route path="/menu" element={<LazyMenu />}></Route>
          <Route path="/register" element={<LazyUserInfoForm />}></Route>
          <Route path="/basket" element={<LazyBasket />}></Route>
          <Route path="*" element={<LazyPageNotFound />}></Route>
          <Route path="/order/:orderID" element={<LazyOrder/>}></Route>
        </Routes>
        {/* </PizzaItemProvider> */}
      </Suspense>
    </div>
  );
}

export default App;
