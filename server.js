const express = require("express");
const app = express();
const http = require("http");


// 1 Kirish code
app.use(express.static("public"));  // permission to public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // permission for html form request



// 2: Session code



// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4: Routing code
app.get("/hello", function (req, res) {
    res.end("<h1>hello world !!</h1>")
});

app.get("/gift", function (req, res) {
    res.end("<h1>Siz sovgalar bolimidasiz</h1>")
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log("server running....!");
});