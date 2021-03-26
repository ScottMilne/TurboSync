

$(document).ready(function () {
	


	const audio = document.getElementById('audio');
	const image1 = document.getElementById('audioimage');
//	window.alert(jsonAudioTimings);

	function animateAudio() {
		let time = audio.currentTime;
		console.log(`Current audio time: ${audio.currentTime}`);
		jsonAudioTimings.forEach((item) => {
			if (item.start < time && time < item.end) image1.src = `/images/${item.value}.png`;
		})
		if (!audio.ended) window.requestAnimationFrame(animateAudio);
	}

	function playAudio() {
		audio.play();
		animateAudio();
	}
	
	
	
	
	document.getElementById('audioBtn').onclick = playAudio;
	
	

	/*
		//////////////////////////What a Tweest////////////////////////////////////////////

	
	const whatATweest = document.getElementById('whatATwistAudio');
	const image1 = document.getElementById('whattwist');


	function animateWhatATwist() {
		let time = whatATweest.currentTime;
		console.log(`Current audio time: ${whatATweest.currentTime}`);
		whatATwistTiming.forEach((item) => {
			if (item.start < time && time < item.end) image1.src = `/images/${item.value}.png`;
		})
		if (!whatATweest.ended) window.requestAnimationFrame(animateWhatATwist);
	}

	function playWhatATwist() {
		whatATweest.play();
		animateWhatATwist();
	}

	document.getElementById('whatATwistBtn').onclick = playWhatATwist;
	
	////////////////////////// FIRST OF ALL ////////////////////////////////////////////////////////

	const firstOfAll = document.getElementById('firstOfAllAudio');
	const image2 = document.getElementById('myImage2');


	function animateFirstOfAll() {
		let time = firstOfAll.currentTime;
		console.log(`Current audio time: ${firstOfAll.currentTime}`);
		firstOfAllTiming.forEach((item) => {
			if (item.start < time && time < item.end) image2.src = `/images/${item.value}.png`;
		})
		if (!firstOfAll.ended) window.requestAnimationFrame(animateFirstOfAll);
	}

	function playFirstOfAll() {
		firstOfAll.play();
		animateFirstOfAll();
	}

	document.getElementById('firstOfAllBtn').onclick = playFirstOfAll;

	////////////////////////// WREKT ////////////////////////////////////////////////////////

	const wrekt = document.getElementById('wrektAudio');
	const image3 = document.getElementById('myImage3');


	function animateWrekt() {
		let time = wrekt.currentTime;
		console.log(`Current audio time: ${wrekt.currentTime}`);
		wrektTiming.forEach((item) => {
			if (item.start < time && time < item.end) image3.src = `/images/${item.value}.png`;
		})
		if (!wrekt.ended) window.requestAnimationFrame(animateWrekt);
	}

	function playWrekt() {
		wrekt.play();
		animateWrekt();
	}

	document.getElementById('wrektBtn').onclick = playWrekt;

	////////////////////////// GOT EEEM ////////////////////////////////////////////////////////

	const gotIm = document.getElementById('gotImAudio');
	const image4 = document.getElementById('myImage4');

	function animateGotIm() {
		let time = gotIm.currentTime;
		console.log("gotim");
		console.log(`Current audio time: ${gotIm.currentTime}`);
		gotImTiming.forEach((item) => {
			if (item.start < time && time < item.end) image4.src = `/images/${item.value}.png`;
		})
		if (!gotIm.ended) window.requestAnimationFrame(animateGotIm);
	}

	function playGotIm() {
		gotIm.play();
		animateGotIm();
	}

	document.getElementById('gotImBtn').onclick = playGotIm;

///////////////////////////////////////////////////////////////////////////////////////////////

	const damage = document.getElementById('damageAudio');
	const image6 = document.getElementById('myImage6');

	function animateDamage() {
		let time = damage.currentTime;
		console.log(`Current audio time: ${damage.currentTime}`);
		damageTiming.forEach((item) => {
			if (item.start < time && time < item.end) image6.src = `/images/${item.value}.png`;
		})
		if (!damage.ended) window.requestAnimationFrame(animateDamage);
	}

	function playDamage() {
		damage.play();
		animateDamage();
	}

	document.getElementById('damageBtn').onclick = playDamage;	
	
	///////////////////////////////////////////////////////////////////////////////////////////////

	const hello = document.getElementById('helloAudio');
	const image7 = document.getElementById('myImage7');

	function animateHello() {
		let time = hello.currentTime;
		console.log(`Current audio time: ${hello.currentTime}`);
		helloTiming.forEach((item) => {
			if (item.start < time && time < item.end) image7.src = `/images/${item.value}.png`;
		})
		if (!hello.ended) window.requestAnimationFrame(animateHello);
	}

	function playHello() {
		hello.play();
		animateHello();
	}

	document.getElementById('helloBtn').onclick = playHello;	
	
	*/
	
})
