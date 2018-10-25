// ============================== //
// ===== NODEMON MEETS PM2 ====== //
// ============================== //

/**
 * This snippet of code is an attempt to resolve unexpected crashing on a server.
 * There are other programs like this (a popular one is pm2), but this is simply 
 * to demonstrate some of the power you get by importing nodemon as a module,
 * instead of simply using it as a CLI tool.
 */

// require nodemon as a module
const nm = require('nodemon');

// count how many crashes have happened
let counter = 0;

// global variables
let nodemon;
let params = 'index.js';

// recursive function to restart nodemon process
function start() {
    // empty callstart, remove listeners, reset nodemon
    if (nodemon) {
        nodemon.removeAllListeners(['exit', 'start', 'quit', 'restart']);
        nodemon.reset();
        nodemon = undefined;
    }

    // nodemon = new instance of module
    nodemon = nm(params);

    // notify parent when nodemon has started
    nodemon.once('start', () => {
        console.log('\nstarted\n');
    })

    // notify parent when nodemon has crashed
    nodemon.once('exit', () => {
        // log crash number
        console.log(`\nexited: ${counter}\n`);
        counter += 1;

        // recursively restart server
        start();
    })
}

// initial start
start();