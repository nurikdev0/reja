const express = require("express");
const app = express();
const mongodb = require("mongodb");

// const fs = require("fs");


// MongoDB connect
const db = require("./server").db();



// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//     if (err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });


// 1 Kirish code
app.use(express.static("public")); // MiddleWare DP  // permission to public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // permission for html form request



// 2: Session code



// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4: Routing code
// app.get("/hello", function (req, res) {
//     res.end("<h1>hello world !!</h1>")
// });

// app.get("/gift", function (req, res) {
//     res.end("<h1>Siz sovgalar bolimidasiz</h1>")
// });

app.get("/", function (req, res) {
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("error db!")
        } else {
            res.render("reja", { items: data })
        }
    });
});

app.post("/create-item", (req, res) => {
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        res.json(data.ops[0]);
    })
});

app.post('/delete-item', (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function (err, data) {
        res.json({ state: "success" })
    })
})

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "Malumotlar o'chirildi" })
        })
    }
})

app.post('/edit-item', (req, res) => {
    const data = req.body;
    db.collection("plans").findOneAndUpdate({ _id: new mongodb.ObjectId(data.id) }, { $set: { reja: data.new_input } }, function (err, data) {
        res.json({ state: "success" })
    })
})

app.get("/author", (req, res) => {
    res.render("author", { user });
});




/*
git reset --hard
git clean --df
feat:/fix: - for comment
git branch author
git checkout author
*/



module.exports = app;