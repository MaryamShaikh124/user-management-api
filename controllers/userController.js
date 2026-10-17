
let users = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Sara", email: "sara@example.com" }
];

let nextId = 3;

// GET all users
exports.getUsers = (req, res) => {
  res.json(users);
};

// GET one user
exports.getUserById = (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

// POST a new user
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  const newUser = {
    id: nextId++,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

// PUT update a user
exports.updateUser = (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  user.name = name;
  user.email = email;

  res.json(user);
};

// DELETE a user
exports.deleteUser = (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  users = users.filter(
    (u) => u.id !== Number(req.params.id)
  );

  res.json({ message: "User deleted successfully" });
};
