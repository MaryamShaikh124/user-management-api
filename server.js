
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Management API is running!");
});

app.use("/api/users", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
