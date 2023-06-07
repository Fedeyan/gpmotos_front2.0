import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Login/Auth";
import AuthHandler from "./Components/layouts/AuthHandler";
import { useEffect } from "react";
import Nav from "./Components/nav/Nav";
import HomeLayout from "./Components/layouts/HomeLayout";
import PrivateRoute from "./Components/layouts/PrivateRoute";
import Profile from "./Pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { checkSessionAction, getUserdata } from "./redux/userSlice";
import AdminPrivateRoutes from "./Components/layouts/AdminPrivateRoutes";
import Dashboard from "./Pages/admin/Dashboard";

function App() {
  const store = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(
    function () {
      async function session() {
        let result = dispatch(checkSessionAction());

        return result;
      }
      session().then(function (result) {
        if (result.payload === true) {
          if (!store.userdata?.length) {
            dispatch(getUserdata());
          }
        }
      });
    },
    [dispatch, store.userdata.length]
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<HomeLayout />} />
          <Route path="/auth" element={<AuthHandler />}>
            <Route path="/auth/register" element={<Auth />} />
            <Route path="/auth/login" element={<Auth />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/info" element={<div>Test</div>} />
            <Route element={<AdminPrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
