const express = require("express");

const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/about", (req, res) => res.sendFile(__dirname + "/about.html"));
app.get("/contact-me", (req, res) =>
  res.sendFile(__dirname + "/contact-me.html")
);
app.get("*", (req, res) => res.status(404).sendFile(__dirname + "/404.html"));

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
