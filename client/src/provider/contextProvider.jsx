import { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"

export const UserContext = createContext({})

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)


  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data)
        setReady(true)
      })
    }
  })

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  )
}
