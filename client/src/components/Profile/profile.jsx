import { useContext, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { UserContext } from "../../provider/contextProvider"
import axios from "axios"
import Accomodation from "../Accomodation/Accomodation"

const Profile = () => {
  const { path, setPath } = useState(null)
  const { user, ready, setUser } = useContext(UserContext)
  let { subpage } = useParams()
  if (subpage === undefined) {
    subpage = "profile"
  }

  const Logout = async () => {
    try {
      await axios.post("/logout")
      setPath("/")
      setUser(null)
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  if (!ready) {
    return "Loading"
  }
  if (ready && !user && !path) {
    return <Navigate to={"/login"} />
  }

  const linkClasses = (type = null) => {
    let classes =
      "border w-40 text-center px-4 py-2 rounded-full  bg-[#808080] text-white"

    if (type === subpage || (subpage === undefined && type === "profile")) {
      classes =
        "border w-40 text-center px-4 py-2 rounded-full  bg-[#e44f5a] text-white"
    }
    return classes
  }

  if (path) {
    return <Navigate to={path} />
  }

  return (
    <div className="px-4  border-red-600 py-6 md:px-10 md:py-10 flex flex-col gap-10">
      <div className="flex justify-start items-center gap-2 sm:gap-4 flex-wrap">
        <Link to={"/account/profile"} className={linkClasses("profile")}>
          My Profile
        </Link>
        <Link to={"/account/booking"} className={linkClasses("booking")}>
          My Booking
        </Link>
        <Link to={"/account/places"} className={linkClasses("places")}>
          Accomodation
        </Link>
      </div>
      <div>
        {subpage === "profile" && (
          <div className="flex flex-col gap-6">
            <p>
              You are logged as a {user.name} ({user.email})
            </p>
            <button
              className="border px-10 rounded-full bg-[#e44f5a] text-white py-2 w-fit"
              onClick={Logout}
            >
              Logout
            </button>
          </div>
        )}

        {subpage == "places" && <Accomodation />}
      </div>
    </div>
  )
}

export default Profile
