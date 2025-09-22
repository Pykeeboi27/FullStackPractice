import express from "express";

const app = express();
const port = 3000;

const today = new Date();
const day = today.getDate();
let weekType = "weekday"
let weekMessage = "it's time to work hard"


if (day === 0 || day === 6){
    weekType = "weekend"
    weekMessage = "it's time to party"
}
app.get("/", (req,res)=>{
    res.render("index.ejs", 
        {
            weektype: weekType,
            message: weekMessage
        }
    )
})
app.listen(port, ()=>{
    console.log(`Running on port ${port}.`)
})