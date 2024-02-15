import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

interface CSRFResponse {
  csrfToken: string;
}

export const instance: AxiosInstance = axios.create({
  baseURL: "https://backend.mint-easy.de",
  xsrfCookieName: "csrfToken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
});

export const updateCSRFToken = async (): Promise<void> => {
  const existingToken = Cookies.get("csrfToken");

  if (existingToken) {
    return; // Use the existing token without fetching a new one
  }

  try {
    const response = await instance.get<CSRFResponse>("/get-csrf-token/");
    const csrfToken = response.data.csrfToken;
    Cookies.set("csrfToken", csrfToken, { expires: 1, path: "/" });
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
  }
};

// Add an interceptor to include the CSRF token in every request
instance.interceptors.request.use((config) => {
  const csrfToken = Cookies.get("csrfToken");
  const authToken = Cookies.get("authToken");
  if (csrfToken) {
    config.headers["X-CSRFToken"] = csrfToken;
  }

  if (authToken) {
    config.headers["Authorization"] = `Token ${authToken}`;
  }
  return config;
});

export default instance;
