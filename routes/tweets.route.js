import { Router } from "express"
import { getAllData, getDataById } from "../controller/data.controller.js"

const tweetRoutes = Router ()

tweetRoutes.get('/:id', getDataById);
tweetRoutes.get("/", getAllData);

export default tweetRoutes