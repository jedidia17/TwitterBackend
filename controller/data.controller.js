import data from "../data.js";

export function getAllData(req, res){
    res.status(200).json(data)
}