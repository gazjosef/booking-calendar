import axios from "axios";

export interface UserData {
  // ! Check the structure of user data
  username: string;
  email: string;
  password: string;
}

const API_URL = "/api/users/";

// Register user
const register = async (userData: UserData) => {
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
