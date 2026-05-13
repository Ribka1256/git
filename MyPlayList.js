// ================= AUDIO PLAYER =================

let songs = document.querySelectorAll(".player");
let titles = document.querySelectorAll(".title");
let lyrics = document.querySelectorAll(".lyric")
let images = document.querySelectorAll(".image")

let counter = 0;

function showSong(index) {
  songs.forEach(song => song.classList.remove("displaySong"));
  titles.forEach(title => title.classList.remove("displaySong"));
  lyrics.forEach(lyric => lyric.classList.remove("displaySong"));
  images.forEach(image => image.classList.remove("displaySong"))

  songs[index].classList.add("displaySong");
  titles[index].classList.add("displaySong");
  images[index].classList.add("displaySong")
  lyrics[index].classList.add("displaySong")
}

function stopAll() {
  songs.forEach(song => {
    song.pause();
    song.currentTime = 0;
  });
}

function playnext() {
  stopAll();
  counter = (counter + 1) % songs.length;
  showSong(counter);
  songs[counter].play();
}

function playpre() {
  stopAll();
  counter = (counter - 1 + songs.length) % songs.length;
  showSong(counter);
  songs[counter].play();
}


