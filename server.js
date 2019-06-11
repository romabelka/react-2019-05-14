const express = require("express");
const proxy = require("express-request-proxy");

const app = express();

app.use("/api/*", proxy({ url: "http://localhost:3001/api/*" }));

app.use(express.static("build"));
app.use((req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`main app listening at ${PORT}`));
