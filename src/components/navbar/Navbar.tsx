import "./navbar.scss";
import LoginForm from "../loginForm/LoginForm";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClientProvider
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthStateContext } from "../../contexts/AuthStateContext";

const Navbar = () => {
  // const [showLoginForm, setShowLoginForm] = useState(false); // State to control LoginForm visibility
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  // const [username, setUsername] = useState(''); // State to store the username
  const {
    showLoginForm,
    isLoggedIn,
    username,
    setShowLoginForm,
    setIsLoggedIn,
    setUsername,
    msg,
  } = useAuthStateContext();

  const openLoginForm = () => {
    setShowLoginForm(true);
    console.log("triggered by openLoginForm", showLoginForm);
  };
  const navigate = useNavigate(); // Declare navigate function from react-router-dom

  const handleLogout = () => {
    // Perform logout actions

    Cookies.remove("authToken", { path: "/" }); // Remove authToken cookie
    Cookies.remove("username", { path: "/" }); // Remove username cookie
    Cookies.remove("csrftoken", { path: "/" }); // Remove csrftoken cookie
    // console.log("cookie", document.cookie)

    setUsername(""); // Reset username state
    // console.log("username", username)

    navigate("/"); // Navigate to home page
    setShowLoginForm(false); // Hide the login form
    // console.log("triggered by handleLogout", showLoginForm)

    setIsLoggedIn(false); // Set login status to false
    // console.log("isLoggedIn", isLoggedIn)
  };

  const handleLogin = (name: string) => {
    // Perform login actions
    setIsLoggedIn(true); // Set login status to true
    setUsername(name); // Set username state
    setShowLoginForm(false); // Hide the login form
  };

  return (
    <div className="navbar">
      {msg && <div className="msg">{msg}</div>}
      <div className="logo">
        <img src="easy.svg" alt="" />
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        {/* <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" /> */}
        {/* <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div> */}
        <div className="user">
          {isLoggedIn ? ( // Conditionally render based on login status
            <>
              {/* <img
                src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              /> */}

              <span>{username}</span>
              <button
                onClick={() => {
                  handleLogout();
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <span onClick={openLoginForm}> Sign in</span>
          )}
        </div>
        {/* login form visability condition */}
        {showLoginForm && (
          <LoginForm
            slug="Sign In"
            setOpen={setShowLoginForm}
            handleLogin={handleLogin}
          />
        )}

        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
