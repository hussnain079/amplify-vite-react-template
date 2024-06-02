import "@aws-amplify/ui-react/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("./Login/Login"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
