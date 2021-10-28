import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface AuthProviderData {
  authToken: string;
  signIn: (userData: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  if (authToken !== "") history.push("/dashboard");

  const signIn = (data: UserData) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/dashboard");
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
