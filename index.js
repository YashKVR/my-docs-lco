const express = require('express')

const app = express()

//YAML Related
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




app.get("/", (req,res) => {
    res.send("Hello From Backend!")
})


app.listen(4000, () => {
    console.log(`Server is running at PORT: 4000...`);
})