import { Router } from "express"
import { getAllData } from "../controller/data.controller.js"

const tweetRoutes = Router ()

tweetRoutes.get("/tweets", getAllData)

export default tweetRoutes