import "./passResetForm.scss";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { instance } from "../../axiosInstance";
import { useParams } from "react-router-dom";

/** 
email reset password form
connects to django auth email reset password
*/

// declare the type of the form data
type PassResetFormData = {
  new_password1: string;
  new_password2: string;
  uid: string;
  token: string;
};

// declare the type of the props
type PassResetFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
};

// set the initial state of the form data

const PassResetForm: React.FC<PassResetFormProps> = (props) => {
  //const queryClient = useQueryClient();

  const { uid = "", token = "" } =
    useParams<{ uid: string; token: string }>() || {}; // Destructure and set default empty strings
  console.log(uid, token);
  const [formData, setFormData] = useState<PassResetFormData>({
    new_password1: "",
    new_password2: "",
    uid: uid || "",
    token: token || "",
  });

  // const navigate = useNavigate(); // Declare navigate function from react-router-dom
  const [error, setErrors] = useState<string | null>(null); // State to store error message
  const [successful, setSuccessful] = useState<string | null>(null); // State to store error message

  // useEffect(() => {
  //     // Fetch CSRF token and set it in cookies
  //     axiosInstance.get('/get-csrf-token/')
  //         .then((response) => {
  //             const csrfToken = response.data.csrfToken;
  //             Cookies.set('csrfToken', csrfToken, { expires: 1, path: '/' });
  //         })
  //         .catch((error) => {
  //             console.error('Error fetching CSRF token:', error);
  //         });
  // }, []);

  const mutation = useMutation({
    mutationFn: () => {
      return instance
        .post(`/auth/password/reset/confirm/${uid}/${token}/`, formData)
        .then((response) => {
          const responseData = response.data;
          console.log(responseData.detail);
          setSuccessful(responseData.detail);

          if (responseData.status === 200) {
            // Return the response if needed
            return response;
          }
        })
        .catch((error) => {
          console.error("Error:", error.response);
          setErrors(error.response.status);
        });
    },
    onSuccess: () => {
      console.log("Password reset successful");
    },
  });

  return (
    <div className={props.open ? "passResetForm open" : "passResetForm"}>
      <div className="passResetForm">
        {successful && (
          <div
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <h1>{successful}</h1>
          </div>
        )}
        <div className="modal">
          <span className="close" onClick={() => props.setOpen(false)}>
            {" "}
            {/* close the form */}x
          </span>
          <h1>Reset Password</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              mutation.mutate();
            }}
          >
            <div className="item">
              <label htmlFor="new_password1">Password</label>
              <input
                type="password"
                name="new_password1"
                id="new_password1"
                value={formData.new_password1}
                onChange={(e) =>
                  setFormData({ ...formData, new_password1: e.target.value })
                }
              />
            </div>
            <div className="item">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                name="new_password2"
                id="new_password2"
                value={formData.new_password2}
                onChange={(e) =>
                  setFormData({ ...formData, new_password2: e.target.value })
                }
              />
            </div>
            <button type="submit">Reset Password</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default PassResetForm;
