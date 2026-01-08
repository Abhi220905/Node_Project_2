const express = require('express')
const app = express()
const allData = require("./views/src/layout/content")


app.set("view engine", "ejs")
require("dotenv").config()

const PORT = process.env.PORT || 5000

app.use(express.static("public"))
app.use(express.static("view"))

// app.get("/", (req, res) => {
//     res.send("Server Running")
// })

 /// home page

app.get("/", (req, res) => {
    const pageData = allData.find(item => item.name === "Home");

    res.render("src/pages/home", {
        title: "Home",
        name: pageData.name,
        image: pageData.image
    });
});


// about page

app.get("/about", (req, res) => {
   const pageData = allData.find(item => item.name === "About");

    res.render("src/pages/about", {
        title: "About",
        name: pageData.name,
        image: pageData.image
    });
})


// contect page

app.get("/contect", (req, res) => {
   const pageData = allData.find(item => item.name === "Content");

    res.render("src/pages/contect", {
        title: "Content",
        name: pageData.name,
        image: pageData.image
    });
})


/// news page
app.get("/news", (req, res) => {
    const pageData = allData.find(item => item.name === "News");

    res.render("src/pages/news", {
        title: "News",
        name: pageData.name,
        image: pageData.image
    });
})


/// productt page
app.get("/product", (req, res) => {
    const pageData = allData.find(item => item.name === "Product");

    res.render("src/pages/product", {
        title: "Product",
        name: pageData.name,
        image: pageData.image
    });
})


app.listen(PORT, () => console.log(`Application is ruuning on http://localhost:${PORT}/`))