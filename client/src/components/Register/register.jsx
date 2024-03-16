import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Register = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

    const handleSubmit = async (ev) =>{
        ev.preventDefault();
        try {
          await axios.post('/register', {
            name, 
            email,
            pass
        })
        alert("Congratulations, You have successfully registered!")
        } catch (error) {
          alert("Registration failed, Please try again!")
        }
    };

  return (
    <div className=" flex justify-center mt-9 ">
      <div className=" w-5/12">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              value={name}
              onChange={(ev) => setUsername(ev.target.value)}
              type="text"
              placeholder="Dev himal"
              className=" py-2 px-4 w-full border rounded-full active:outline-none hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              type="text"
              placeholder="example@gmail.com"
              className=" py-2 px-4 w-full border rounded-full active:outline-none hover:outline-none focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              value={pass}
              onChange={(ev) => setPass(ev.target.value)}
              type="password"
              placeholder="Password"
              className="w-full py-2 px-4 border rounded-full active:outline-none hover:outline-none focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="border  rounded-full px-8 py-2 bg-[#E44F5A] text-[#fff]"
          >
            create account
          </button>
          <p className="py-6 flex justify-center items-center">
            Already have an account?{" "}
            <Link to="/login" className=" px-2 text-blue-600 underline">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
