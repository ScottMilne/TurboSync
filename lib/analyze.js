const util = require('util');
const exec = util.promisify(require('child_process').exec);

const analyze = (name = 'audio') => {
	console.log(name);
	exec(`../rhubarb/rhubarb -d /inbox/${name}.txt -f json -o /outbox/${name}.json /inbox/${name}.wav`)
		.then(() => {
			console.log('successfully analyzed audio file');
		})
		.catch((err) => {
			console.log(`err: ${err}`);
		})
}

// analyze('whatATwist');
// analyze('wrekt');
//analyze('firstOfAll');