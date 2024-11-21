import { createContext, useState } from "react";

export const UserContext = createContext({
  name: null,
  course: null,
});

const john = {
  name: "John",
  course: "DevOps"
}

const jack = {
  name: "Jack",
  course: "FSD - Full Stack Development"
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(john); // crayons

  const toggleUser = () => {
    if (user === john) {
      setUser(jack);
    } else {
      setUser(john)
    }
  }
  return (
    <UserContext.Provider value={{
      user,
      toggleUser
    }}>
      {children}
    </UserContext.Provider>
  )
}