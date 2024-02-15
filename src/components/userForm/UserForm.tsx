import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import "./userForm.scss";
import { instance, updateCSRFToken } from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

/*
registration form
the form is rendered in a modal
the modal is rendered in from the textbox 
axios is used to send the data to the backend - django rest framework
the data is validated in the backend and in the frontend
the response is sent back to the frontend
successful response is 200 status code with a msg to verify the email

*/
// decalre the type of the form data
type UserFormData = {
  username: string;
  email: string;
  password1: string;
  password2: string;
};

// declare the type of the props
type UserFormProps = {
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
// set the initial state of the form data
const UserForm: React.FC<UserFormProps> = (props) => {
  const navigate = useNavigate(); // Declare navigate function from react-router-dom
  //  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<UserFormData>({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  // set the initial state of the errors
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    username: null,
    email: null,
    password1: null,
    password2: null,
  });

  const [msg, setMsg] = useState<string | null>(null); // set the initial state of the message
  const [termsChecked, setTermsChecked] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      updateCSRFToken(); // update the csrf token using function from axiosInstance.ts

      instance
        .post("/registration/", formData) // send the data to the backend
        .then((response) => {
          //console.log(response);
          if (response.data && response.data.message) {
            setMsg(response.data.message); // set the message
            // console.log(msg);
          }
        })
        .catch((error) => {
          // catch any errors
          // console.log(error);
          setErrors(error.response.data); // set the errors
        });
    },

    onSuccess: () => {
      // queryClient.invalidateQueries([`all${props.slug}s`]); // invalidate the query preparing it for a refetch
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e stands for event
    e.preventDefault(); // prevent the default behaviour of the form like page refresh or redirect

    if (!termsChecked) {
      return alert("Please accept the terms and conditions."); // Check if AGB checkbox is checked
    }

    if (formData.password1 !== formData.password2) {
      // local validation
      return alert("Passwords don't match!");
    }

    try {
      await mutation.mutateAsync(); // execution is paused until the promise is resolved
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // handle the input change
  // update the form data and the errors
  // the errors are set to null when the user starts typing
  // this way the user can see the errors only after they have tried to submit the form
  // this is done to avoid showing errors when the user is typing

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData({ ...formData, [field]: e.target.value });

    setErrors({ ...errors, [field]: null });
  };

  const handleCloseModal = () => {
    props.setOpen(false);
    navigate("/");
  };

  return (
    <div className="userForm">
      <div className="modal">
        <span className="close" onClick={handleCloseModal}>
          x
        </span>
        {/* If there is a message display it otherwise display the form */}
        {msg ? (
          <div className="item">
            {/* Display the message */}
            <h4>{msg}</h4>
            {/* Show button to close form */}
            <button
              className="closeButton"
              onClick={() => props.setOpen(false)}
            >
              Close
            </button>
          </div>
        ) : (
          <React.Fragment>
            {" "}
            {/* React.Fragment is used to avoid using a div */}
            {/* Display the form */}
            <h1>{props.slug}</h1>
            <form onSubmit={handleSubmit}>
              {/* Username Input */}
              <div className="item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => handleInputChange(e, "username")}
                  required
                />

                {/* display relevant errors in the right place*/}
                {errors.username && <p>{errors.username}</p>}
              </div>

              {/* Email Input */}
              <div className="item">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  required
                />
                {errors.email && <p>{errors.email}</p>}
              </div>

              {/* Password Input */}
              <div className="item">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password1}
                  onChange={(e) => handleInputChange(e, "password1")}
                  required
                />
                {/* display relevant errors in the right place*/}
                {errors.password1 && <p>{errors.password1}</p>}
              </div>

              {/* Confirm Password Input */}
              <div className="item">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.password2}
                  onChange={(e) => handleInputChange(e, "password2")}
                  required
                />
                {/* display relevant errors in the right place*/}
                {errors.password2 && <p>{errors.password2}</p>}
                {msg && <p>{msg}</p>}
              </div>

              <div className="termsCheckbox">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)} // Update checkbox state
                  required
                />
                <label htmlFor="termsCheckbox">
                  I agree to the <a href="AGBminteasy.pdf">terms</a> and
                  conditions
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit">Send</button>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default UserForm;
