
function convertAudioToJson(){
const cp = require('child_process')

cp.exec('C:../rhubarb/rhubarb.exe -d ../inbox/audio.txt -f json -o ../outbox/audio.json ../inbox/audio.wav', (err, stdout, stderr) => {
  console.log(stdout);
});
}

convertAudioToJson(); //For testing, comment out when not testing
