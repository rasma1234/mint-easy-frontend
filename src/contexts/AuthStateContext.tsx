import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

interface AuthStateContextProps {
  showLoginForm: boolean;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
  showUserForm: boolean;
  setShowUserForm: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  msg: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
}

const AuthStateContext = createContext<AuthStateContextProps | undefined>(
  undefined,
);

export const useAuthStateContext = (): AuthStateContextProps => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthStateContext must be used within a NavbarProvider");
  }
  return context;
};

interface AuthStateProviderProps {
  children: ReactNode;
}

export const AuthStateProvider: React.FC<AuthStateProviderProps> = ({
  children,
}) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const authToken = Cookies.get("authToken"); // Get authToken from cookie
    const user = Cookies.get("username"); // Get username from cookie
    const userId = Cookies.get("userId"); // Get username from cookie
    if (authToken) {
      setIsLoggedIn(true); // Set login status to true if authToken exists
      setUsername(user || "no user cookie"); // Set username state
      setUserId(parseInt(userId || "0"));
    }
  }, []);

  return (
    <AuthStateContext.Provider
      value={{
        showLoginForm,
        setShowLoginForm,
        showUserForm,
        setShowUserForm,
        isLoggedIn,
        setIsLoggedIn,
        username,
        setUsername,
        msg,
        setMsg,
        userId,
        setUserId,
      }}
    >
      {children}
    </AuthStateContext.Provider>
  );
};
