const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Static Files
app.use(express.static("public"));
app.use('/css', express.static(__dirname + "public/css"));

// Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routes
const newsRouter = require("./src/routes/news");
app.use("/", newsRouter);













// Listening on port 3000
app.listen(3000, function(req, res) {
  console.log("Server is running at port 3000.");
});
