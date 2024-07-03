window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "Begin M3"; 
let currentDate = new Date().toLocaleString();
    rand = Math.floor(Math.random() * 10000);
    localStorage.setItem('rand', rand); 

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script2 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "Begin"; 
let currentDate = new Date().toLocaleString();
let rand = localStorage.getItem('rand');
let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script3 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "part2"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script4 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 start"; 
let currentDate = new Date().toLocaleString(); 

localStorage.setItem('rand', rand);

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script5 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "page 9"; 
let currentDate = new Date().toLocaleString(); 

let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script6 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "page 18"; 
let currentDate = new Date().toLocaleString(); 

let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script7 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P2 p1"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script8 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P2 p2"; 
let currentDate = new Date().toLocaleString(); 

let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script9 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P2 p3"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script10 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 p4"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script11 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P2 end"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script12 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 option2"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script13 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "option1"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script14 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "option2"; 
let currentDate = new Date().toLocaleString(); 
//let rand = Math.floor(Math.random() * 10000); 
localStorage.setItem('rand', rand);

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script15 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 option2 p5"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script16 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "op1"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script17 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "op1"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script18 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 option1 T1 Corr"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});

}

window.Script19 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 option1 T2"; 
let currentDate = new Date().toLocaleString(); 

let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script20 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 option1 Q1"; 
let currentDate = new Date().toLocaleString(); 

let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script21 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 option1 Q2"; 
let currentDate = new Date().toLocaleString(); 

let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script22 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 P1 option1 Q3"; 
let currentDate = new Date().toLocaleString(); 

let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script23 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "M3 End"; 
let currentDate = new Date().toLocaleString(); 

let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

};
