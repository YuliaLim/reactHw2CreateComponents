import "./App.css";
import Header from "./components/Header";
import CounterReduce from "./components/CounterReduce";
import LoginForm from "./pages/LoginForm";
import Menu from "./pages/Menu";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PageNotFound from "./pages/PageNotFound";
import UserInfoForm from "./pages/UserInfoForm";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header></Header>
      </div>
      <Routes>
        <Route path="" element={<Menu />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/register" element={<UserInfoForm />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {/* <CounterReduce></CounterReduce> */}
    </div>
  );
}

export default App;
