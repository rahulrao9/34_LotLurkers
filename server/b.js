var http = require('http');
var fs = require('fs');


var SerialPort = require('serialport');
const { parse } = require('path');
const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('COM3',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

parser.on('data',function(data)
{
    console.log(data)
    const csv = require('csv-parser');
    const fs = require('fs');
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    
    // Read the CSV file
    const results = [];
    fs.createReadStream('new.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        // Update the value of the cell

        let arr=data.split(" ")
        results[parseInt(arr[0])].state = parseInt(arr[1]);
    
        // Write the updated data back to the CSV file
        const csvWriter = createCsvWriter({
          path: 'new.csv',
          header: Object.keys(results[0]).map((key) => ({ id: key, title: key })),
        });
        csvWriter.writeRecords(results);
      });
  
})