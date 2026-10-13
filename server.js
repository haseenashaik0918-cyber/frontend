const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname)));

function sendPage(res, fileName) {
  res.sendFile(path.join(__dirname, "pages", fileName));
}

app.get("/", (req, res) => sendPage(res, "login.html"));
app.get("/login", (req, res) => sendPage(res, "login.html"));
app.get("/login.html", (req, res) => sendPage(res, "login.html"));
app.get("/register", (req, res) => sendPage(res, "register.html"));
app.get("/register.html", (req, res) => sendPage(res, "register.html"));
app.get("/dashboard", (req, res) => sendPage(res, "dashboard.html"));
app.get("/dashboard.html", (req, res) => sendPage(res, "dashboard.html"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});