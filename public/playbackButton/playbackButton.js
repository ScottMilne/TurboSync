const audio = document.getElementById('audio');

function playAudio() {
  audio.play();
  //window.alert("playing");
}

document.getElementById('play').onclick = playAudio;
