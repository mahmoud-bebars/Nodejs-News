const express = require("express");
const ejs = require("ejs");

const app = express();

const port = process.env.PORT || 4000;

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// templeting engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Deprecated
app.use(express.urlencoded({ extended: true })); // New

// routes
const newsRouter = require("./src/routes/news");
app.use("/", newsRouter);

app.listen(port, () => {
  console.log(
    `server is up and listening to port: ${port} on http://localhost:${port}`
  );
});

// News API APIKey: 9c08be690efe4d41873c1d3bfae2ff47
