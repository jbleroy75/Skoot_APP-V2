import { createContext } from "react";

const UserContext = createContext({
  user: {
    id: "",
    email: "",
  },
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUser: () => {},
});

export default UserContext;
