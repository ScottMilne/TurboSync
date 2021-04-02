

$(document).ready(function () {
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

	function playAudio() {
		audio.play();
		animateAudio();
	}	
	document.getElementById('audioBtn').onclick = playAudio;		
})
