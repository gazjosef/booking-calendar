// *** REGISTER NEW USER
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// *** AUTHENTICATE A USER
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// *** GET USER DATA
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
