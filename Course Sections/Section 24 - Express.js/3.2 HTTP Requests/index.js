import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>About Me</h1><p>Hi! My name is Jiroh.</p>");
});

app.get("/contacts", (req, res)=>{
    res.send("<h1>Contacts</h1><p>My Instagram: jiroh.carps</p>");
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}.`);
});


