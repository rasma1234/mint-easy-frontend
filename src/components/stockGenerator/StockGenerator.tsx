// Import necessary libraries and styles
import "./stockGenerator.scss";
import React, { useState } from "react";
import instance from "../../axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { updateCSRFToken } from "../../axiosInstance";
import ReactLoading from 'react-loading';

type StockItemData = {
  symbol: string;
};

// interface ChatResponse {
//   [key: string]: string;
// }

export const StockGenerator: React.FC<any> = () => {
  const [formData, setFormData] = useState<StockItemData>({
    symbol: "",
  });

  // State to manage errors
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    symbol: null,
  });

  // State to store the response from the server
  const [chatResponse, setChatResponse] = useState<string | null>(null);

  // Create a mutation using useMutation
  const mutation = useMutation({
    mutationFn: async () => {
      updateCSRFToken();
      console.log("form data", formData);

      try {
        const response = await instance.post(
          "/data/api/retrieve-chat-response/",
          formData,
        );
        console.log("response", response);

        if (response.data) {
          // Assuming the server response has a structure like { symbol, chat_response }
          setChatResponse(response.data.chat_response);
        }
      } catch (error: any) {
        // catch any errors
        console.error("error", error);
        setErrors(error.response?.data || { symbol: "An error occurred" }); // set the errors
        throw error;
      }
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  console.log("isLoading", isLoading);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({ symbol: null });
    setIsLoading(true); // Start loading


    try {
      await mutation.mutateAsync(); // wait for promise to resolve
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Function to handle clearing the response and input field
  const handleClearResponse = () => {
    setChatResponse(null);
    setFormData({ symbol: "" });
  };

  return (
    <div className="stockGenerator">
      <div>
      {mutation.isPending && <ReactLoading type="bars" color="#6ae9ea" />}

        <form onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="symbol">Enter stock symbol</label>
            <input
              type="text"
              id="symbol"
              name="symbol"
              value={formData.symbol}
              onChange={(e) =>
                setFormData({ ...formData, symbol: e.target.value })
              }
            />

            <button type="submit" className="btn">
              Generate stock opinion
            </button>

            <button type="button" className="btn" onClick={handleClearResponse}>
              Clear Response
            </button>

            {errors.symbol && <div className="error">{errors.symbol}</div>}
          </div>

          
        </form>

        {/* Display result from the server */}
        {chatResponse && (
          <div>
            <h2>this is what we think</h2>
            {chatResponse.split("**").map((item, index) => (
              <p key={index}>
                {item.trim() && <span>&bull; {item.trim()}</span>}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StockGenerator;
