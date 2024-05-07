import express from "express" 
import data from "./data.js"
import tweetRoutes from "./routes/tweets.route.js"

const app = express()
app.use(express.json())
app.use("/", tweetRoutes)

app.listen(8080,()=>console.log("serveur running..."))