exports.getProtectedRoute = (req, res) => {
    res.json({ message: `Hello, ${req.user.username}!` });
  };
  