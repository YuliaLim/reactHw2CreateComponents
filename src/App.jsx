// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
