const http = require("http");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://nurikdev0:uQkErb128Cuov9uQ@cluster0.0reiw.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";


mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log("ERROR DB");
    } else {
        console.log(" DB connecting...");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`server running....!, http://localhost:${PORT}`);
        });
    }
})


