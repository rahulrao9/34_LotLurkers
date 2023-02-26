//import express from "express"
//import cors from "cors"
//import bodyparser  from "body-parser"
const express = require('express')
const app=express()
const cors=require('cors')
app.use(cors());
app.use(express.json())


app.get("/file",function(req,res)
{

    
//     var data = req.params.id;
//    data=parseInt(data)
   //console.log(data)

//    MongoClient.connect("mongodb://localhost:27017",function(err,client){
//     if(err)
//     console.log(err)
//     else{
        
//         const db=client.db("simple_db")
//          db.collection("movie").findOne({"movie_id":data},function(err,detail)
//         {
//             if(err)
//             console.log(err)
//             else
            
//             res.json(detail.seatsus)
//             client.close()
//         })

//     }

// }) 

// var fs = require('fs'); 
// var { parse }= require('csv-parse');
// var parser = parse({columns: true}, function (err, records) {
//     //var data=records.parse()
//     //const customer = JSON.parse(records);
// 	console.log(records)
// });

// fs.createReadStream(__dirname+'/new.csv').pipe(parser);
//console.log("hello")


/*var fs = require('fs');

var data = fs.readFileSync('new.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

console.log(data);
//console.log(JSON.stringify(data, '', 2)); // as json
//var =new Array
for(i in data)
{
    console.log(data[i][1])
}*/


const csvFilePath='new.csv' // Resource.csv in your case
const csv=require('csvtojson') // Make sure you have this line in order to call functions from this modules
var array = new Array()
var a

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    var i=0;
    a=jsonObj
    
    for(i in jsonObj)
    {
        array[i]=parseInt(jsonObj[i].state)
    
    console.log(typeof(jsonObj[i]))
    }
    //console.log(array);
    res.json(array)
})
//console.log(a[0])
// for(i in jsonObj)
// {
//     console.log(jsonObj[0])
// }


// var data= [0,1,0,1,1]
// res.send(data)
  //client.close()

   
   
});

app.listen(8080,function(){
	
    console.log("server is running")
    })
