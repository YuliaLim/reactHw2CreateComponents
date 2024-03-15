import "./App.css";
import { Suspense, lazy } from "react";
import { Audio } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";

const LazyPageNotFound = lazy(() => import("./pages/PageNotFound"));
const LazyUserInfoForm = lazy(() => import("./pages/UserInfoForm"));
const LazyHeader = lazy(() => import("./components/Header"));
const LazyLoginForm = lazy(() => import("./pages/LoginForm"));
const LazyMenu = lazy(() => import("./pages/Menu"));

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
        <div className="wrapper">
          <LazyHeader />
        </div>

        <Routes>
          <Route path="" element={<LazyMenu />}></Route>
          <Route path="/login" element={<LazyLoginForm />}></Route>
          <Route path="/menu" element={<LazyMenu />}></Route>
          <Route path="/register" element={<LazyUserInfoForm />}></Route>
          <Route path="*" element={<LazyPageNotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
