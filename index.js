import express from "express"

const app = express()

app.get("/", (req, res) =>{
    res.send("nombre: Genesis Fernandez cedula: 30874005 seccion: 3")
})

app.listen(3000)
console.log('server on port', 3000)