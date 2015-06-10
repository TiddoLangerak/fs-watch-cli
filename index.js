#!/usr/bin/env node
var fs = require('fs');
var spawn = require('child_process').spawn;

if (process.argv.length < 4) {
	console.log("Usage: fs-watch FILE COMMAND [ARG1 [ARG2 [...]]]");
	process.exit(1);
}

var filename = process.argv[2];
var command = process.argv[3];
var args = process.argv.slice(4);

fs.watch(filename, function() {
	spawn(command, args, { env : process.env, stdio : 'inherit' });
});
