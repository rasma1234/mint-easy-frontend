import "./textBox.scss";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserForm from "../userForm/UserForm"; // Import the UserForm component
import { Link } from "react-router-dom";
import { useAuthStateContext } from "../../contexts/AuthStateContext";

// Declare the type of the props
type Props = {
  pageTitle: string;
  pageSubtitle: string;
  pageText: string;
};

const TextBox = (props: Props) => {
  //const [showUserForm, setShowUserForm] = useState(false); // State to control UserForm visibility
  const { showUserForm, setShowUserForm } = useAuthStateContext();

  const openUserForm = () => {
    setShowUserForm(true); // Function to show UserForm
  };
  // main homepage component. main navigation and slogan
  return (
    <div>
      <div className="pageTitle">
        <h1>{props.pageTitle}</h1>
      </div>
      <div className="pageSubtitle">
        <h1>{props.pageSubtitle}</h1>
      </div>
      <div className="pageText" dangerouslySetInnerHTML={{ __html: props.pageText.replace(/\n/g, '<br />') }}></div>

      <div className="btnPanel">
        <Link to="/invest">
          <div className="btn">I want to invest</div>
        </Link>
        <Link to="/trading">
          <div className="btn">I want to day trade</div>
        </Link>
        <div className="btn" onClick={openUserForm}>
          SignUp now!
        </div>
      </div>
      {showUserForm && <UserForm slug="Sign Up" setOpen={setShowUserForm} />}{" "}
      {/* Render UserForm when showUserForm is true */}
    </div>
  );
};

export default TextBox;
