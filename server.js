const express = require("express");
const bodyParser = require("body-parser");
const entityRoutes = require("./routes/entityRoutes");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", entityRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/headless-cms-frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../headless-cms-frontend/build", "index.html")
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
