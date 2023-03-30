const express = require('express');
const bodyParser = require('body-parser');
const port = 3000
const app = express()
    app.use(bodyParser.urlencoded({extended: true}))

app.get('/' , (req,res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')

})

app.post('/', (req, res) => {

    var weight = Number(req.body.yourWeight);
    var height = Number(req.body.yourHeight);

    var result = Math.floor((weight / Math.pow(height, 2)) * 703 );

    res.send("Your Body Mass Index is " + result)

})``

app.listen(port, () => {
    console.log("port 3000 is ready/")
})