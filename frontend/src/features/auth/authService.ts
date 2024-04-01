import axios from "axios";

const API_URL = "/api/users/";

type TODO = any;

// Register user
const register = async (userData: TODO) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response;
};

const authService = {
  register,
};

export default authService;
