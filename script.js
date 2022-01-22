const songs = [
    "ES_Linear Lingo STEMS DRUMS.mp3",
    "ES_Linear Lingo.mp3",
    "Night Shifts STEMS INSTRUMENTS.mp3",
    "Night Shifts.mp3",
    "You Take Me to Paradise.mp3"
];
const player = document.getElementById("player");


function createSongList() {
const list = document.createElement("ul");
for(let i =0; i < songs.length; i++) {
const item = document.createElement("li");
   item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
    }
    return list;
}

const songList = document.getElementById('songList');
songList.appendChild(createSongList());

songList.onclick = function (e) {
  const source = document.getElementById('source');
  source.src = "songs/" + e.target.innerText;

  document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`

  
  player.load();
  player.play();
};

function playAudio() {
    if(player.readyState) {
        player.play();
    }
}

function pauseAudio() {
    player.pause()
}

const slider = document.getElementById('volumeSlider')
slider.oninput = function(e) {
const volume = e.target.value
player.volume = volume;
};

function updateProgress() {
    if(player.currentTime > 0) {
    const progressBar = document.getElementById('progress');
    progressBar.value =(player.currentTime/ player.duration) *100
    }
  }



  var userOne ={
    email: 'jael@abderhalden.icu', 
    name: 'Jael',
    login: function(){
      console.log(this.email, 'has logged in'); 
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);

// let htmlObj = document.getElementById("identifikation");
htmlObj.innerHTML =
`email: ${userOne.email}<br>`+
`Name: ${userOne.name}<br>`;
