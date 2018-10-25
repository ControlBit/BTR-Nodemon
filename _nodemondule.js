// =================================== //
// ========== MODULE IMPORT ========== //
// =================================== //

const nodemon = require('nodemon');

/**
 * The nodemon module can take either a string
 * or an object as an argument when invoking.
 */

// =================================== //
// ============ ARGUMENTS ============ //
// =================================== //

// === STRING ARGUMENT === //
/**
 * If you are using a string as an argument,
 * you will simply treat it like the CLI, and pass
 * in arguments the same way, and generally in the
 * same order.
 */

// nodemon('-e "js json" index.js');

// === OBJECT ARGUMENT === //
/**
 * When you pass in an object as the argument,
 * you can treat it much like the config file,
 * as it has the same fields.
 */

nodemon({
	script: 'index.js',
    ext: 'js json'
});

// =================================== //
// ============== EVENTS ============= //
// =================================== //

/**
 * In addition to just having the ability to create
 * new child processes, running nodemon as a module
 * allows us to send data to our application, an also
 * receive data back from it. This is done through
 * events. This is not an inclusive list of events,
 * but instead just the basics.
 */

// === START === //
/**
 * As it sounds, this runs when our index.js file
 * first opens up. We can see that this is the case
 * if we look in our terminal.
 */

nodemon.on('start', () => {
	console.log('index.js has started');
});

// === RESTART === //

/**
 * Any time our application restarts - which in this case
 * is when we type 'rs' - this function runs, and notifies
 * us what has happened.
 */

nodemon.on('restart', () => {
	console.log('index.js has restarted');
});

// === QUIT === //

/**
 * This is run when the process nodemon is running terminates
 */

nodemon.on('quit', () => {
	console.log('index.js has quit');
});

// === LOG (VERBOSE ONLY) === //

/**
 * It's great to know about the other events above,
 * but one thing you'll find from setting them up
 * manually, is that you begin to miss the build-in
 * logs that nodemon provides. NEVER FEAR!!! Nodemon
 * has your back. The last event we'll cover is the
 * 'log' event below:
 * 
 * *Note* this is affected by verbose mode
 */

// nodemon.on('log', (data) => {
//     console.log('data', data.colour);
// })


// ===== EMITING EVENTS ===== //

/**
 * As shown above, we are able to create event listeners.
 * But sometimes that isn't enough. Sometimes we need to
 * be able to create those events ourselves. This is
 * done through nodemon.emit();
 */

// setTimeout(() => {
// 	console.log('emiting event');
// 	nodemon.emit('restart');
// }, 3000);

/**
 * Note: when the above code was run, we not only saw the
 * 'restart' log, but the 'start' log again. This could
 * be a potential problem, depending on your application.
 * We can fix this by replacing our nodemon.on('start')
 * code with the 'once' method below:
 */

// nodemon.once('start', () => {
// 	console.log('index.js started only once');
// });