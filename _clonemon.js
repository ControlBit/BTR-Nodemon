const { spawn } = require('child_process');
const path = require('path');

const pattern = /.js$/gi;

// this is the globally spawned process
let node;

// get the file name that needs to be run
function getFileFromArgs(args) {
	if (!args[2] || !pattern.test(args[2])) {
		throw new Error('Missing or Invalid arguments');
	}
	return args[2].split('/').pop();
}

// define the file
let file = getFileFromArgs(process.argv);

// if file doesn't exist, throw error
if (!file) {
	throw new Error('No file to watch...');
}

// kill the old node, and start a new one
function startNode() {
	// reset node
	if (node) {
		node.kill();
		node = undefined;
	}

	// spawn new node
	node = spawn('node', [path.resolve(__dirname, file)]);

	// add listener for new data input
	node.stdout.on('data', data => {
		console.log(`data from child: ${data.toString()}`);
	});
}

startNode();

// when the user types in, check if its a recognized command
process.stdin.on('data', data => {
	data = data.toString().trim();

	// check if user has entered a keyword
	switch (data) {
		case 'rs':
			console.log('restarting server');
			startNode();
			break;
		case 'exit':
			console.log('killing server');
			node.kill();
			process.exit(0);
			break;
		case 'clear':
			console.clear();
			console.log('console cleared');
			break;
		default:
			console.log('unrecognized command. try again');
	}
});
