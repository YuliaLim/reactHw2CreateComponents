import "./App.css";
import Header from "./components/Header";
import LoginForm from "./pages/LoginForm";
import Menu from "./pages/Menu";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PageNotFound from "./pages/PageNotFound";

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
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
