function time() {
  var today = new Date()
  var hr = today.getHours()
  var min = today.getMinutes()
  var sec = today.getSeconds()
  var ms = today.getMilliseconds()

  if (min < 10) {
    min = "0" + min
  }
  if (sec < 10) {
    sec = "0" + sec
  }
  if (ms == 0) {
    ms = "000"
  }
  else if (ms < 10) {
    ms = "00" + ms 
  }
  else if (ms < 100)
    ms = "0" + ms

  document.getElementById('txt').innerHTML = hr + ":" + min + ":" + sec + ":" + ms

//had lots of help from James Hwang
  // if (min % 5 == 0) {
  // return
  // }
  if (min % 2 == 0) {
    document.body.style.backgroundColor = "grey"
    console.log('even')
  } else if (min % 2 != 0) {
    document.body.style.backgroundColor = "black"
    console.log('odd')
  } 
}

function text() {
  var d = new Date();
  var m = d.getMinutes()
  var c = ["lightblue", "#red", "#orange", "#purple", "#green"]
  var random = c[Math.floor(Math.random() * c.length)]
  
  if (m == 0) {
    document.getElementById("txt").style.color = random
  }
}

function bg() {
  var d = new Date();
  var m = d.getMinutes()
  var random = "#" + Math.floor(Math.random() * 16777215).toString(16)

  if (m % 5 == 0) {
    document.getElementById("txt").style.color = random
    // document.body.style.backgroundColor = random
    console.log('five');
  }
}  
setInterval(time, 50)
setInterval(text, 1000)
setInterval(bg, 5000)
