#!/usr/bin/env node
"use strict";

const fs = require('fs'),
	  path = require('path'),
	  argv = require('yargs').argv,
	  exec = require('child_process').exec,
	  execSync = require('child_process').execSync,
	  _ = require('lodash');
	  // requireg = require('requireg'),
	  // npm = requireg('npm');

// const Warning = require('../libs/SteamerErrWarning'),
// 	  Logger = require('../libs/SteamerLogger'),
// 	  Get = require('../libs/SteamerGet'),
// 	  Install = require('../libs/SteamerInstall'),
// 	  DevOrPub = require('../libs/SteamerDevOrPub'),
// 	  Init = require('../libs/SteamerInit'),
// 	  Remove = require('../libs/SteamerRemove');
// 	  

const Kit = require('../libs/steamer-plugin-kit');

// var steamerConfigPath = path.resolve('steamer.config.js'),
// 	steamerConfig = {},
// 	projectConfig = {};
	// defaultNodeVer = {},

/**
 * read config file
 * @return {[type]} [description]
 */
// function readConfig() {
// 	let config = null;
// 	if (!fs.existsSync(steamerConfigPath)) {
// 		throw new Warning.ConfigMissing();
// 	}

// 	config = require(steamerConfigPath);

// 	if (!config) {
// 		throw new Warning.ConfigMissing();
// 	}

// 	return config;
// }


function init() {

	if (argv.kit) {
		Kit();
	}

	// if (argv.init) {
	// 	Init();
	// }

	// steamerConfig = readConfig();
	// projectConfig = steamerConfig.projects;
	// // defaultNodeVer = steamerConfig.defaultNodeVersion;

	// if (!projectConfig) {
	// 	throw new Warning.ProjectMissing();
	// }

	// // if (!defaultNodeVer) {
	// // 	throw new Warning.NodeVerMissing();
	// // }

	// if (argv.dev || argv.pub) {
	// 	DevOrPub(steamerConfig);
	// }
	// else if (argv.install) {
	// 	Install(steamerConfig);
	// }
	// else if (argv.get) {
	// 	Get(steamerConfig);
	// }
	// else if (argv.remove) {
	// 	Remove(steamerConfig);
	// }
	// else if (argv.init) {

	// }
	// else {
	// 	throw new Warning.Command();
	// }
}

init();

