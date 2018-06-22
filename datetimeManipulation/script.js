'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let student = JSON.parse(rawdata);
console.log(student);
student.forEach(function(e) {
  e.videos.forEach(function(el) {
    console.log(el.title);
  })
})


// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
//
// console.log("hello script");
//
// function readTextFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//     if (rawFile.readyState === 4 && rawFile.status == "200") {
//       callback(rawFile.responseText);
//     }
//   }
//   rawFile.send(null);
// }
// var table = document.getElementById("table")
// var header = table.createTHead();
// var row = header.insertRow(0);
// var array = ["title", "duration", "accumulation", "percentage"];
// for (var i = 0; i < array.length; i++) {
//   var cell = row.insertCell(i);
//   cell.innerHTML = array[i];
// }
// var row = table.insertRow(0);
// for (var i = 0; i < array.length; i++) {
//   var headerCell = document.createElement("TH");
//   headerCell.innerHTML = array[i];
//   row.appendChild(headerCell);
// }

// var tbody = document.createElement("tbody");

// var val = 0;
// var mod = 0;
// var row = null;
// var cell = null;

// Read Synchrously
// var fs = require("fs");
// console.log("\n *START* \n");
// var content = fs.readFileSync("data.json");
// console.log("Output Content : \n" + content);
// console.log("\n *EXIT* \n");
// content.forEach(function(e) {
//   console.log(e.module);
// });

// obj = JSON.parse('data.json');
// console.log(obj);

// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('', 'data.json', 'utf8'));
// var config = require('data.json');
// console.log("vhjk");


// readTextFile("data.json", function(text) {
//
//   var data = JSON.parse(text);
//   console.log("inside function");
//
// });