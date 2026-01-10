const express = require('express')
const app = express()
const allData = require("./views/src/layout/content") 


app.set("view engine", "ejs")
require("dotenv").config()

const PORT = process.env.PORT || 5000

app.use(express.static("public"))
app.use(express.static("view"))
 
 /// home page

app.get("/", (req, res) => {
  res.render("src/pages/home", {
    title: "Home",
    allData  
  });
});


// about page

app.get("/about", (req, res) => {
    res.render("src/pages/about", {
        title: "About",
        allData
    });
})


// contect page

app.get("/contect", (req, res) => { 

    res.render("src/pages/contect", {
        title: "Content", 
        allData
    });
})


/// news page
app.get("/news", (req, res) => {
    
    res.render("src/pages/news", {
        title: "News",
        allData
    });
})


/// productt page
app.get("/product", (req, res) => {
    
    res.render("src/pages/product", {
        title: "Product",
        allData
    });
})


app.listen(PORT, () => console.log(`Application is ruuning on http://localhost:${PORT}/`))