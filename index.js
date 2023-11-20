const express = require('express')

const app = express()

//YAML Related
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


let courses = [
    {
        id: "11",
        name: "Learn Reactjs",
        price: 299
    },
    {
        id: "22",
        name: "Learn Angular",
        price: 399
    },
    {
        id: "33",
        name: "Learn Django",
        price: 499
    },
]



app.get("/", (req,res) => {
    res.send("Hello From Backend!")
})


app.get("/api/v1", (req,res) => {
    res.send("Hello From Backend!")
})


app.listen(4000, () => {
    console.log(`Server is running at PORT: 4000...`);
})