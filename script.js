function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}
var table = document.getElementById("table")
// var header = table.createTHead();
// var row = header.insertRow(0);
var array = ["Title", "Duration", "Accumulate Time", "Accumulated Percentage", "Percentage for Each"];
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

var tbody = document.createElement("tbody");

var val = 0;
var mod = 0;
// var row = null;
// var cell = null;
readTextFile("data.json", function(text) {

  var data = JSON.parse(text);

  var txt = null;
  var th = null;
  var tr = document.createElement("tr");

  for (var i = 0; i < array.length; i++) {

    th = document.createElement("th");
    txt = document.createTextNode(array[i]);
    th.appendChild(txt)
    tr.appendChild(th);
  }
  // th.appendChild(th)
  // td.appendChild(txt);
  tbody.appendChild(tr);
  var acc = 0;
  var secs = 0;
  // var accumulated = new Date('1970-01-01T00:00:00');
  // var datetime = new Date('1970-01-01T00:00:00');
  // var timeString = new Date('1970-01-01T00:00:00');
  // var anHour = new Date('1970-01-01T01:00:00');
  var duration = null;
  var millis = 0;

  var m = 0;
  var s = 0;
  var ms = 0;
  var scs = 0;
  var total = 0;
  var thisisecs = 0;
  var num = 1;
  var hours = 0;

  data.forEach(function(e, index) {
    e.videos.forEach(function(el, num) {
      var m = el.time[0] + el.time[1];
      m = +m;
      var s = el.time[3] + el.time[4];
      s = +s;
      ms = m * 60;
      scs += (ms + s);
      console.log("scs: " + scs);
      total = scs;
    })
  });

  data.forEach(function(e, index) {

    // var timeString = '12:23:00';
    // var datetime = new Date('1970-01-01T' + timeString + 'Z');
    // var d = new Date(accumulated);
    // console.log("d: " + d);
    // var n = d.getTime();
    // console.log("n: " + n);
    // console.log(new Date());
    // console.log(accumulated);

    // var d = new Date();
    // var d = new Date(milliseconds);
    // var d = new Date(dateString);
    // var d = new Date(year, month, day [,hour,minute,second,millisecond ]);
    // var d = new Date(2018, 03, 11[02, 02, 01, 10]);
    // console.log("d... = " + d);



    // console.log(e.length);
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var txt = document.createTextNode(e.module);

    td.classList.add("bold");
    td.appendChild(txt);
    tr.appendChild(td);
    tbody.appendChild(tr);
    mod += 1;
    console.log("module = " + mod);

    e.videos.forEach(function(el) {
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      var txt = document.createTextNode((num) + ". " + el.title);
      // tr.addClass("success");
      num++;
      //parse the time instead
      var minutes = el.time[0] + el.time[1];
      minutes = +minutes;
      var seconds = el.time[3] + el.time[4];
      seconds = +seconds;
      console.log("minutes : " + minutes);
      console.log("seconds : " + seconds);
      minsecs = minutes * 60;
      console.log("minsecs : " + minsecs);
      thissecs = minsecs + seconds;
      secs += (thissecs);
      console.log("totalsecs : " + secs);

      var sec = secs % 60;
      var mins = (secs - sec) / 60;
      if (sec < 10) {
        sec = "0" + sec;
      }

      var mi = mins % 60; //the extra mins
      var hours = (mins - mi) / 60;
      mins = mi;
      if (mins < 10) {
        mins = "0" + mins;
      }

      if (hours < 10) {
        hours = "0" + hours;
      }

      // start = new Date(0).getTime(); //millisecs since 1970 Jan 1
      // start = new Date(0); //millisecs since 1970 Jan 1

      // date.setHours(date.getHours());

      // console.log("start : " + start);
      // console.log("typeof(millis): " + typeof(millis) + ", millis: " + millis);
      // console.log("typeof(start): " + typeof(start) + ", start: " + start);

      // next = start + millis;
      // acc += secs;
      console.log("acc: " + acc);

      // next = next - anHour;

      // console.log("typeof(next): " + typeof(next) + ", next: " + next);
      // var date = new Date(next);
      // console.log("date: " + date.toString());
      //from date get the hours and minutes

      td.appendChild(txt);
      tr.appendChild(td);

      td = document.createElement("td");
      td.classList.add("success");
      txt = document.createTextNode(el.time);
      td.appendChild(txt);
      tr.appendChild(td);

      // timeString = "00:" + el.time;
      // console.log(timeString);
      // datetime = new Date('1970-01-01T' + timeString);
      // console.log(datetime);
      // console.log("acc = " + acc);
      // acc += new Date(datetime);

      td = document.createElement("td");
      // acc = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      td.classList.add("success");
      txt = document.createTextNode(hours + ":" + mins + ":" + sec);
      td.appendChild(txt);
      tr.appendChild(td);

      tbody.appendChild(tr);
      val += 1;
      // console.log("video =" + val);

      // td.appendChild(txt);
      // tr.appendChild(td);
      console.log("total: " + total);
      console.log("secd: " + secs);
      console.log("thissecs: " + thissecs);
      var percentage = ((secs / total) * 100).toFixed(2);
      var percent = ((thissecs / total) * 100).toFixed(2); //needs one cecimal place
      // num.toFixed(2);
      // console.log(Math.floor(5.95));
      td = document.createElement("td");
      td.classList.add("success");
      txt = document.createTextNode(percentage + "%");
      td.appendChild(txt);
      tr.appendChild(td);


      td = document.createElement("td");
      td.classList.add("success");
      txt = document.createTextNode(percent + "%");
      td.appendChild(txt);
      tr.appendChild(td);
    });
    table.appendChild(tbody);

  });
});