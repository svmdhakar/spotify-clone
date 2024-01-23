var playpause = document.getElementById("play");
var slider_volume = document.getElementById("volume");
var songtimer = document.getElementById("song_time");
var mute_unmute_img=document.getElementById("volume_img")
var song_list=document.querySelector(".songList").getElementsByTagName(" ul")
var song_ul=document.getElementById("myList")



var songs;

// get data when user click on paylist

function getPlaylistData(playlistName) {
  songs=""

  switch (playlistName) {
    case 0:
      var arjit= [
        {
          name: "03 Janam Janam - Dilwale (Arijit Singh)  ",
          artist: "",
          img: "",
          path: "songs/03 Janam Janam - Dilwale (Arijit Singh) 320Kbps.mp3",
        },
        {
          name: "Hamdard - Arijit Singh   ",
          artist: "",
          img: "",
          path: "songs/Hamdard - Arijit Singh - 320Kbps.mp3",
        },{
          name: "Raaz Aankhein Teri - Raaz Reboot (Arijit Singh) ",
          artist: "",
          img: "",
          path: "songs/Raaz Aankhein Teri - Raaz Reboot (Arijit Singh) 320Kbps.mp3",
        },{
          name: "Soch Na Sake (Airlift) Arijit Singh  ",
          artist: "",
          img: "",
          path: "songs/Soch Na Sake (Airlift) Arijit Singh 320Kbps.mp3",
        },{
          name: "Tum Hi Ho - Arijit Singh  ",
          artist: "",
          img: "",
          path: "songs/Tum Hi Ho - Arijit Singh - 320Kbps.mp3",
        },
      ];
      return songs=arjit
    case 1:
      var neha_kakkar=[
        {
          name: "Garmi - Street Dancer 3D",
          artist: "",
          img: "",
          path: "songs/Garmi - Street Dancer 3D.mp3",
        },
        {
          name: " Jinke Liye - Neha Kakkar",
          artist: "",
          img: "",
          path: "songs/Jinke Liye - Neha Kakkar.mp3",
        },
        {
              name: "Shona Shona - Tony Kakkar  ",
              artist: "",
              img: "",
              path: "songs/Shona Shona - Tony Kakkar (1).mp3",
            }, {
              name: "Taaron Ke Shehar - Neha Kakkar ",
              artist: "",
              img: "",
              path: "songs/Taaron Ke Shehar - Neha Kakkar.mp3",
            },
            {
              name: "Bheegi Bheegi - Neha Kakkar ",
              artist: "",
              img: "",
              path: "songs/Bheegi Bheegi - Neha Kakkar.mp3",
            },
      ];
      return songs=neha_kakkar;
      case 2:
        var sidhu_moosewala=[
          {
            name: "295 - Sidhu Moose Wala ",
            artist: "",
            img: "",
            path: "songs/295 - Sidhu Moose Wala.mp3",
          },
          {
            name: "Same Beef - Bohemia",
            artist: "",
            img: "",
            path: "songs/Same Beef - Bohemia.mp3",
          },
          {
                name: "So High - Sidhu Moose Wala  ",
                artist: "",
                img: "",
                path: "songs/So High - Sidhu Moose Wala 320Kbps.mp3",
              },
              {
                name: "The Last Ride - Sidhu Moose Wala ",
                artist: "",
                img: "",
                path: "songs/The Last Ride - Sidhu Moose Wala.mp3",
              },
              {
                name: "Levels - Sidhu Moose Wala ",
                artist: "",
                img: "",
                path: "songs/Levels - Sidhu Moose Wala.mp3",
              },
        ];
        return songs=sidhu_moosewala;
        case 3:
          var Badshah=[
            {
              name: "Aaj Raat Ka Scene (Jazbaa) Badshah ",
              artist: "",
              img: "",
              path: "songs/Aaj Raat Ka Scene (Jazbaa) Badshah 190Kbps.mp3",
            },
            {
              name: "Akkad Bakkad - Sanam Re ( Badshah )  ",
              artist: "",
              img: "",
              path: "songs/Akkad Bakkad - Sanam Re ( Badshah ) 320Kbps.mp3",
            },
            {
                  name: " Bolo Har Har Har - Shivaay ",
                  artist: "",
                  img: "",
                  path: "songs/Bolo Har Har Har - Shivaay - 190Kbps.mp3",
                }, {
                  name: "Dj Waley Babu - BADshah (feat. Aastha Gill)  ",
                  artist: "",
                  img: "",
                  path: "songs/Dj Waley Babu - BADshah (feat. Aastha Gill) 190Kbps.mp3",
                },
          ];
          return songs=Badshah;
          case 4:
            var honey_singh=[
              {
                name: " 02 Love Dose (Desi Kalakaar) Yo Yo Honey Singh",
                artist: "",
                img: "",
                path: "songs/02 Love Dose (Desi Kalakaar) Yo Yo Honey Singh.mp3",
              },
              {
                name: "Blue Eyes - Yo Yo Honey Singh (PagalWorld.com)  ",
                artist: "",
                img: "",
                path: "songs/Blue Eyes - Yo Yo Honey Singh (PagalWorld.com) .mp3",
              },
              {
                    name: " Chaar Bottle Vodka (Funny Drunk Piano Cover)",
                    artist: "",
                    img: "",
                    path: "songs/Chaar Bottle Vodka (Funny Drunk Piano Cover).mp3",
                  }, {
                    name: " High Heels - Ki and Ka (Yo Yo Honey Singh) ",
                    artist: "",
                    img: "",
                    path: "songs/High Heels - Ki and Ka (Yo Yo Honey Singh) 190Kbps.mp3",
                  },{
                    name: " Lak 28 Kudi Da 47 - Yo Yo Honey Singh ",
                    artist: "",
                    img: "",
                    path: "songs/Lak 28 Kudi Da 47 - Yo Yo Honey Singh Ft Diljit Dosanjh.mp3",
                  },
            ];
            return songs=honey_singh;
            case 5:
              var rahat_fateh_ali=[
                {
                  name: " Ajj Din Chadeya - Rahat Fateh Ali Khan ",
                  artist: "",
                  img: "",
                  path: "songs/Ajj Din Chadeya - Rahat Fateh Ali Khan 320Kbps.mp3",
                },
                {
                  name: "Bol Na Halke Halke - Rahat Fateh Ali Khan  ",
                  artist: "",
                  img: "",
                  path: "songs/Bol Na Halke Halke - Rahat Fateh Ali Khan 320Kbps.mp3",
                },
                {
                      name: "Mere Rashke Qamar - Rahat Fateh  ",
                      artist: "",
                      img: "",
                      path: "songs/Mere Rashke Qamar - Rahat Fateh 320Kbps.mp3",
                    }, {
                      name: " O Re Piya (Aaja Nachle) - Rahat Fateh Ali Khan ",
                      artist: "",
                      img: "",
                      path: "songs/O Re Piya (Aaja Nachle) - Rahat Fateh Ali Khan 320Kbps.mp3",
                    },
                    {
                      name: " Tu Itni Khoobsurat Hai - Rahat Fateh Ali Khan  ",
                      artist: "",
                      img: "",
                      path: "songs/Tu Itni Khoobsurat Hai - Rahat Fateh Ali Khan 320Kbps.mp3",
                    },
              ];
              return songs=rahat_fateh_ali;
   
    default:
      return [];
  }
}


var playlist_array=[{
  name:"Arjit Singh",
  desc:"Top Romantic Songs",
  img:"singer_img/download.jpg"
},{
  name:"Neha Kakkar",
  desc:"Best Album Song",
  img:"singer_img/download (1).jpeg"
},{
  name:"Sidhu Moose Bala",
  desc:"Best Punjabi Song",
  img:"singer_img/download (2).jpeg"
},{
  name:"Badshah",
  desc:"Best Party Songs",
  img:"singer_img/images.jpeg"
},{
  name:"Honey Singh",
  desc:"Best Party Songs",
  img:"singer_img/honey-singh-1.avif"
},{
  name:"Rahat Fateh Ali Khan",
  desc:"Best Album SOng",
  img:"singer_img/rahat-fateh-ali-khan-accused-of-smuggling-foreign-currency-0001.jpg"
}]


var card_container=document.getElementById("card-container")

function loading_playlist(){

  
  playlist_array.forEach(element=>{
    card_container.innerHTML +=`<div class="card">
    <div class="play">
    <img src="img/play.svg" alt="" />
    </div>
    <img
    src="${element.img}"
    alt=""
    />
    <h2>${element.name}</h2>
    <p>${element.desc}</p>
    </div>`
    
  })
}

loading_playlist();


var isplaying = false;
var track_index = 0;
var curr_time;
var total_duration;
var updatetimer;
var ismute;
var update_seeekhbar;
var nxt_song;
var get_path;
var audio_path;
var tab;
var data_filtered;
var data_filtered1;

var audio = document.createElement("audio");


// load playlist



// Get all elements with the class "clickable"
var clickableElements = document.querySelectorAll(".card");

// Convert NodeList to an array
var clickableArray = Array.from(clickableElements);

// Loop through each element and attach a click event listener
clickableArray.forEach(function (element) {
  element.addEventListener("click", function () {
   song_ul.innerHTML=""
    var index_playlist = clickableArray.indexOf(element);
     data_filtered1=(getPlaylistData(index_playlist))
    defalut_run_function(data_filtered1)
  console.log(songs)
  playtrack(track_index)
  play()
  clickable_song();
  console.log(index_playlist)

  


  });
});




 data_filtered=getPlaylistData(0)

function defalut_run_function(datat){
  
  Array.from(datat).forEach(element =>{
    song_ul.innerHTML+=`<li><img class="invert" width="34" src="img/music.svg" alt="">
    <div class="info">
        <div> ${element.name}</div>
        <div>${element.artist}</div>
        <p style="display: none;">${element.path}</p>
        
    </div>
    <div class="playnow">
        <span>Play Now</span>
        <img class="invert" src="img/play.svg" alt="">
    </div> </li>`;
  
  })
}

defalut_run_function(data_filtered)


function clickable_song(){

  
  // Get all li elements
  var listItems = document.querySelectorAll('#myList li');
  
  // Add click event listener to each li element
  
  listItems.forEach(function (li, index) {
    li.addEventListener('click', function () {
       // Display the index when the li is clicked
       console.log(index)
       track_index=index;
       playtrack(track_index);
       play();
      });
    });
    
  }

  clickable_song();

// main function
function playtrack(track_index) {
 clearInterval(updatetimer);
 clearInterval(update_seeekhbar)
 clearInterval(nxt_song)
 resetvalue();

 audio.src = songs[track_index].path;
 audio.load();
 seekhbar_update()
 document.querySelector(".songinfo").innerHTML=songs[track_index].name +songs[track_index].artist;
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
 document.querySelector(".circle").style.left = "0%";

}


// // set song timer
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



// // mute and unmute function 
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




// // this function define autoupdate seekhbar

function seekhbar_autoupdate(){
 update_percentage=(100 *audio.currentTime)/audio.duration +"%" ;
 document.querySelector(".circle").style.left = update_percentage;

 
}





// // This function define automatic play next song when previous song has ended

function auto_next_song(){
 if(audio.duration==audio.currentTime){
   nextsong();
 }
}

 





