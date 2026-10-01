const mockUsers = require("../data/mockUsers");

const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  }

  // Artificial network delay (~800ms)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Check against mock data
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }

  return res.status(200).json({
    success: true,
    token: "mock-jwt-token-xyz-" + Date.now(),
    user: { name: user.name, email: user.email },
  });
};

module.exports = { login };
