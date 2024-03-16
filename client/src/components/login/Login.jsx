import { Link, Navigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "../../provider/contextProvider"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedireact] = useState(false)
  const { setUser } = useContext(UserContext)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post("/login", { email, password })
      setUser(data)
      alert("Login successful")
      setRedireact(true)
    } catch (error) {
      alert("Login failed")
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />
  }

  return (
    <div className=" flex justify-center mt-9 ">
      <div className=" w-5/12">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              type="text"
              placeholder="Username"
              className=" py-2 px-4 w-full border rounded-full active:outline-none hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              placeholder="Password"
              className="w-full py-2 px-4 border rounded-full active:outline-none hover:outline-none focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="border  rounded-full px-8 py-2 bg-[#E44F5A] text-[#fff]"
          >
            Login
          </button>
          <p className="py-6 flex justify-center items-center">
            don&apos;t have an account?{" "}
            <Link to="/register" className=" px-2 text-blue-600 underline">
              create
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
