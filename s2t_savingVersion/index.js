/////////////recorder.js below /////////////////
var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording
var userInput;
var soundInput;
// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext; //audio context to help us record

var recordButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");
//var pauseButton = document.getElementById("pauseButton");

//add events to those 2 buttons
recordButton.addEventListener("click", startRecording);
stopButton.addEventListener("click", stopRecording);  //this could be deleted as not used now
//pauseButton.addEventListener("click", pauseRecording);

function startRecording() {
	console.log("recordButton clicked");
	/*
		Simple constraints object, for more advanced audio features see
		https://addpipe.com/blog/audio-constraints-getusermedia/
	*/
    
    var constraints = { audio: true, video:false }

 	/*
    	Disable the record button until we get a success or fail from getUserMedia() 
	*/

	recordButton.disabled = true;
	stopButton.disabled = false;
	//pauseButton.disabled = false

	/*
    	We're using the standard promise based getUserMedia() 
    	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
	*/

	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
		console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

		/*
			create an audio context after getUserMedia is called
			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
			the sampleRate defaults to the one set in your OS for your playback device
		*/

		audioContext = new AudioContext();

    
		//update the format 
		//document.getElementById("formats").innerHTML="Format: 1 channel pcm @ "+audioContext.sampleRate/1000+"kHz"

		/*  assign to gumStream for later use  */
		gumStream = stream;
		
		/* use the stream */
		input = audioContext.createMediaStreamSource(stream);

		/* 
			Create the Recorder object and configure to record mono sound (1 channel)
			Recording 2 channels  will double the file size
		*/
		rec = new Recorder(input,{numChannels:1})

		//start the recording process
		rec.record()

		console.log("Recording started");

	}).catch(function(err) {
	  	//enable the record button if getUserMedia() fails
    	recordButton.disabled = false;
    	stopButton.disabled = true;
    	//pauseButton.disabled = true
	});
}

function stopRecording() {
	console.log("Recording Stopped");
	//console.log("updated 14");

	//disable the stop button, enable the record too allow for new recordings
	stopButton.disabled = true; // This could be deleleted as not now used
	recordButton.disabled = false;
	//pauseButton.disabled = true;

	//reset button just in case the recording is stopped while paused
	//pauseButton.innerHTML="Pause";
	
	//tell the recorder to stop the recording
	rec.stop();

	//stop microphone access
	gumStream.getAudioTracks()[0].stop();

	//create the wav blob and save it
	rec.exportWAV(saveAudioFile);
	//userInput = "some lovely text"; //set user input for savetextfile
	

	// userInput = paragraph.textContent;


	// //console.log("userInput");
	// var txtBlob = new Blob([userInput]);
	// saveTxtFile(txtBlob);
	}

	//var userInput = document.getElementsByName("p").value;
	//var userInput = container.textContent;

function saveAudioFile(blob) {
fetch(`load.php`,{method:"POST", body:blob})
		.then(response => console.log(response.text))

userInput = paragraph.textContent;


	//console.log("userInput");
	var txtBlob = new Blob([userInput]);
	saveTxtFile(txtBlob);
}

function saveTxtFile(txtBlob){
fetch(`upload.php`,{method:"POST", body:txtBlob})
	.then(response => console.log(response.text))

}  

//save text in textbox to file
// function saveDynamicTextToFile() {
// 	var txtBlob = new Blob([userInput]),

// 	//var userInput = document.getElementsByName("p").value;
// 	//var userInput = container.textContent;

	
// 	var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
// 	saveAs(blob, "audio.txt");
// }






// function createDownloadLink(blob) {
	
// 	var url = URL.createObjectURL(blob);
// 	var au = document.createElement('audio');
// 	var li = document.createElement('li');
// 	var link = document.createElement('a');

// 	//name of .wav file to use during upload and download (without extendion)
// 	var filename = new Date().toISOString();

// 	//add controls to the <audio> element
// 	au.controls = true;
// 	au.src = url;

// 	//save to disk link
// 	link.href = url;
// 	link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
// 	link.innerHTML = "Save to disk"; 

// 	//add the new audio element to li
// 	li.appendChild(au);
	
// 	//add the filename to the li
// 	li.appendChild(document.createTextNode(filename+".wav "))

// 	//add the save to disk link to li
// 	li.appendChild(link);
	
// 	//upload link
// 	var upload = document.createElement('a');
// 	upload.href="#";
// 	upload.innerHTML = "Upload";
// 	upload.addEventListener("click", function(event){
// 		  var xhr=new XMLHttpRequest();
// 		  xhr.onload=function(e) {
// 		      if(this.readyState === 4) {
// 		          console.log("Server returned: ",e.target.responseText);
// 		      }
// 		  };
// 		  var fd=new FormData();
// 		  fd.append("audio_data",blob, filename);
// 		  xhr.open("POST","upload.php",true);
// 		  xhr.send(fd);
// 	})
// 	li.appendChild(document.createTextNode (" "))//add a space in between
// 	li.appendChild(upload)//add the upload link to li

// 	//add the li element to the ol
// 	recordingsList.appendChild(li);

// 	//soundInput = 
	//userInput = paragraph.textContent; //set user input for savetextfile
// 	saveDynamicTextToFile(); //run saveAs function
// 	//saveWavToFile(); // doesnt work yet
// }

function createDownloadLink(blob) {
    var url = URL.createObjectURL(blob);
    var au = document.createElement('audio');
    var li = document.createElement('li');
    var link = document.createElement('a');
    //add controls to the <audio> element 
    au.controls = true;
    au.src = url;
    //link the a element to the blob 
    link.href = url;
    link.download = new Date().toISOString() + '.wav';
    link.innerHTML = link.download;
    //add the new audio and a elements to the li element 
    li.appendChild(au);
    li.appendChild(link);
    //add the li element to the ordered list 

	//var filename = new Date().toISOString();
	var filename = "audio.wav"; 
	//filename to send to server without extension 
	//upload link 
	var upload = document.createElement('a');
	upload.href = "#";
	upload.innerHTML = "Upload";
	upload.addEventListener("click", function(event) {
	    var xhr = new XMLHttpRequest();
	    xhr.onload = function(e) {
	        if (this.readyState === 4) {
	            console.log("Server returned: ", e.target.responseText);
	        }
	    };
	    var fd = new FormData();
	    fd.append("audio_data", blob, filename);
	    xhr.open("POST", "load.php", true);   //load.php - trying different options
	    xhr.send(fd);
	})
	li.appendChild(document.createTextNode(" ")) //add a space in between 
	li.appendChild(upload) //add the upload link to li

    recordingsList.appendChild(li);
}


//speech regonition 
URL = window.URL || window.webkitURL;

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();

const icon = document.getElementById('recordButton');
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');

icon.addEventListener('click', () => {
  //sound.play();
  dictate();
});

const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
	stopRecording(); //stops the recording when the user stops speaking
    const speechToText = event.results[0][0].transcript;
    
    paragraph.textContent = speechToText;
    //userInput = paragraph.textContent; ///////////////////////////////////is this needed
  }
}

const speak = (action) => {
  utterThis = new SpeechSynthesisUtterance(action());
  synth.speak(utterThis);
};

//save text in textbox to file
function saveDynamicTextToFile() {

	//var userInput = document.getElementsByName("p").value;
	//var userInput = container.textContent;
	var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
	saveAs(blob, "audio.txt");
}





////Scott's function to take the audio -> Rhubarb
// <?php 
//     if (isset($_POST['convert']))
//     {
//          echo shell_exec("C:../rhubarb/rhubarb.exe -d ../inbox/audio.txt -f json -o ../outbox/audio.json ../inbox/audio.wav");
//     }
//  ?>