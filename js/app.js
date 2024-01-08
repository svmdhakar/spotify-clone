var playpause = document.getElementById("play");
var slider_volume = document.getElementById("volume");
var songtimer = document.getElementById("song_time");
var mute_unmute_img=document.getElementById("volume_img")

songs = [
  {
    name: "ae dil hai muskil",
    artist: "arjit singh",
    img: "",
    path: "songs/Ae Dil Hai Mushkil Title Track Pritam 128 Kbps.mp3",
  },

  {
    name: "Aaj phir tumpe pyar aaya hai ",
    artist: "hate story",
    img: "",
    path: "songs/Aaj Phir Hate Story 2 128 Kbps.mp3",
  },
  {
    name: "Sajan sajan sajan ",
    artist: "barsaat",
    img: "",
    path: "songs/bollywood_Barsaat 2005 - Saajan Saajan Saajan.mp3",
  },
  {
    name: "Aaj unse milna hai  ",
    artist: "bajrangi hai jaan",
    img: "",
    path: "songs/bollywood_PRDP - Aaj Unse Milna Hai.mp3",
  },
  {
    name: "prem ratan dhan payo ",
    artist: "bajrangi hai jaan",
    img: "",
    path: "songs/bollywood_PRDP - Prem Ratan Dhan Payo.mp3",
  },
  {
    name: "Dil ne ye kaha hai dil se ",
    artist: "dhadkan ",
    img: "",
    path: "songs/Dil Ne Yeh Kaha Hain Dil Se - Dhadkan 320 Kbps.mp3",
  },

  {
    name: "Der na ho jae kahi der na ho jae ",
    artist: "rish",
    img: "",
    path: "songs/Der Na Ho Jaye Kahin Bikhre Moti 320 Kbps.mp3",
  },

  {
    name: "Sandese Aate Hain Border",
    artist: "border",
    img: "",
    path: "songs/Sandese Aate Hain Border 320 Kbps.mp3",
  },

  {
    name: "Hamari Adhuri Kahani (Title Song) ",
    artist: "Arjit singh",
    img: "",
    path: "songs/Hamari Adhuri Kahani (Title Song) Arijit Singh 320Kbps.mp3",
  },
  
];

var isplaying = false;
var track_index = 0;
var curr_time;
var total_duration;
var updatetimer;
var ismute;
var update_seeekhbar;
var nxt_song;

var audio = document.createElement("audio");

// main function
function playtrack(track_index) {
  clearInterval(updatetimer);
  clearInterval(update_seeekhbar)
  clearInterval(nxt_song)
  resetvalue();

  audio.src = songs[track_index].path;
  audio.load();
  seekhbar_update()
  document.querySelector(".songinfo").innerHTML=songs[track_index].name +"/"+songs[track_index].artist;
  updatetimer = setInterval(seekupdate, 1000);
   update_seeekhbar=setInterval(seekhbar_autoupdate,1000);

  nxt_song=setInterval(auto_next_song,1000);
}
playtrack(track_index);

// play pause function
function playpause_btn() {
  if (isplaying) {
    pause();
  } else {
    play();
  }
}
// play function
function play() {
  audio.play();
  playpause.src = "img/pause.svg";
  isplaying = true;
}

// pause function
function pause() {
  audio.pause();
  playpause.src = "img/play.svg";
  isplaying = false;
}

// set next songs
function nextsong() {
  pause();
document.querySelector(".circle").style.left = "0%";



  if (track_index < songs.length - 1) {
    track_index += 1;
  } else {
    track_index = 0;
  }
  playtrack(track_index);
  play();
}

// set previous song
function prevsong() {
  pause();
document.querySelector(".circle").style.left = "0%";

  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = songs.lenth - 1;
  }
  playtrack(track_index);
  play();
}

// set song volume

function set_volume() {
  audio.volume = slider_volume.value / 10;
  console.log(audio.volume);
}

// reset timer value
function resetvalue() {
  curr_time = "00:00";
  total_duration = "00:00";
  songtimer.innerHTML = "00:00/00:00";
}


// set song timer
function seekupdate() {
  // current time calculate
  curr_time = audio.currentTime;
  current_time_minutes = Math.floor(curr_time / 60);
  current_time_second = Math.floor(curr_time - current_time_minutes * 60);

  // total duration calculate
  total_duration = audio.duration;
  total_duration_minute = Math.floor(total_duration / 60);
  total_duration_second = Math.floor(
    total_duration - total_duration_minute * 60
  );

  if (current_time_second < 10) {
    current_time_second = "0" + current_time_second;
  }
  if (total_duration_second < 10) {
    total_duration_second = "0" + total_duration_second;
  }
  if (current_time_minutes < 10) {
    current_time_minutes = "0" + current_time_minutes;
  }
  if (total_duration_minute < 10) {
    total_duration_minute = "0" + total_duration_minute;
  }

  songtimer.innerHTML =
    current_time_minutes +
    ":" +
    current_time_second +
    "/" +
    total_duration_minute +
    ":" +
    total_duration_second;
}

 function seekhbar_update(){
   // Add an event listener to seekbar
   document.querySelector(".seekbar").addEventListener("click", e => {
     let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
     document.querySelector(".circle").style.left = percent + "%";
     audio.currentTime = ((audio.duration) * percent) / 100
    //  console.log(audio.currentTime)
    })
  }



  // Add an event listener for hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0"
})

// Add an event listener for close button
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%"
})



// mute and unmute function 
function mute_btn(){
  if(ismute){
    unmute();
    ismute=false;

  }else{
    mute();
    ismute=true;
  }
}

function mute(){
  audio.volume=0;
  mute_unmute_img.src="img/mute.svg";
}

function unmute(){
  audio.volume=1;
  mute_unmute_img.src="img/volume.svg";

}




// this function define autoupdate seekhbar

function seekhbar_autoupdate(){
  update_percentage=(100 *audio.currentTime)/audio.duration +"%" ;
  document.querySelector(".circle").style.left = update_percentage;

  
}





// This function define automatic play next song when previous song has ended

function auto_next_song(){
  if(audio.duration==audio.currentTime){
    nextsong();
  }
}