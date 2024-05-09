import data from "../data.js";

export function getAllData(req, res){
    console.log(data)
    try{
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error})
    }
}

export function getDataById (req, res) {
    const id = req.body.id;
    const t = data.filter(d => d.id == id);
    res.status(200).json(t);
}