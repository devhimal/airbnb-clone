import "./App.css"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Login from "./components/login/Login"
import Register from "./components/Register/register"
import axios from "axios"
import { UserContextProvider } from "./provider/contextProvider"
import Profile from "./components/Profile/profile"

// base url
axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <>
                    <div>this is the index page of the my website</div>
                  </>
                }
              />
              <Route
                path="dashboard"
                element={
                  <>
                    <div>this is the dashboard of my website.</div>
                    <Outlet />
                  </>
                }
              >
                <Route
                  path="himal"
                  element={
                    <>
                      <div>this is himal tamang</div>
                    </>
                  }
                />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/account/:subpage?" element={<Profile />} />
              <Route path="/account/:subpage/:action" element={<Profile />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
