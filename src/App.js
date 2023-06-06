import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Login/Auth";
import AuthHandler from "./Components/layouts/AuthHandler";
import { useEffect, useState } from "react";
import { checkSession } from "./functions/axios";
import Nav from "./Components/nav/Nav";
import HomeLayout from "./Components/layouts/HomeLayout";
import PrivateRoute from "./Components/layouts/PrivateRoute";
import Profile from "./Pages/Profile";

function App() {
  let [log, setLog] = useState(false);
  useEffect(function () {
    checkSession().then(function (response) {
      setLog(response);
    });
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Nav log={log} />
        <Routes>
          <Route index element={<HomeLayout />} />
          <Route path="/auth" element={<AuthHandler log={log} />}>
            <Route path="/auth/register" element={<Auth />} />
            <Route path="/auth/login" element={<Auth />} />
          </Route>
          <Route element={<PrivateRoute log={log}/>}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
