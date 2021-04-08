

$(document).ready(function () {
	const audioCtx = new AudioContext();
	let buffer = null;
	var counter=0;
	
	const audio = document.getElementById('audio');
	const image1 = document.getElementById('audioimage');
//	window.alert(jsonAudioTimings);

	function animateAudio() {
		let time = audio.currentTime;
		console.log(`Current audio time: ${audio.currentTime}`);
		jsonData.forEach((item) => {
			if (item.start < time && time < item.end) image1.src = `../images/lips/${item.value}.png`;
		})
		if (!audio.ended) window.requestAnimationFrame(animateAudio);
	}



function updateAudio(path) {
	
	const request = new XMLHttpRequest();	
	request.open("GET", path);
	

	request.responseType = "arraybuffer";
	
	request.onload = function() {
    let undecodedAudio = request.response;
    audioCtx.decodeAudioData(undecodedAudio, (data) => buffer = data);
	};
  

	request.setRequestHeader("Cache-Control", "no-cache");
	request.setRequestHeader("Pragma", "no-cache");
	request.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
	request.send();
   
	} 


	function playAudio() {
		var src = "../../inbox/audio.wav";
		var i;
	
		updateAudio(src);		
		const source = audioCtx.createBufferSource();
		source.buffer = buffer;
		source.connect(audioCtx.destination);
		if(counter ==1){
			counter=0;
		source.start();} else {
			counter++;
		}
		
		
	
		//animateAudio();
	}	
	document.getElementById('audioBtn').onclick = playAudio;		
})
