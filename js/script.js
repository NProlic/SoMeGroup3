// in js/js.js
/*jshint es5: true */

/*The list*/
let myList = [
    "Adobe Photoshop",
    "Adobe XD",
    "Adobe Illustrator"
]

/*loop to display array of strings*/
for (let i = 0; i < 3; i++) {
    content.innerHTML += '<pre>        </pre><u>' + myList[i] + '</u><pre>        </pre>';
}

/*Preloads video*/
var vid = document.getElementById("myVideo");;

function playVid() {
    vid.play();
}

function pauseVid() {
  vid.pause();
}

mute.addEventListener('click',
  function(){
    myVideo.muted = true;
  });

unmute.addEventListener('click',
  function(){
    myVideo.muted = false;
  });
