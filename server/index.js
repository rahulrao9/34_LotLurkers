
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
app.use(express.json())


app.get("/file", function (req, res) {





    const csvFilePath = 'new.csv' // Resource.csv in your case
    const csv = require('csvtojson') // Make sure you have this line in order to call functions from this modules
    var array = new Array()
    var a

    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            var i = 0;
            a = jsonObj

            for (i in jsonObj) {
                array[i] = parseInt(jsonObj[i].state)

                console.log(typeof (jsonObj[i]))
            }

            res.json(array)
        })




});

app.listen(8080, function () {

    console.log("server is running")
})