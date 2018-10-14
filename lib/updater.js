'use strict';

const debug = require('debug')('mk:mqtt-textlabels:controller');

let alreadyRunning = false;

module.exports = {
  start,
  stop,
};

function start() {
  if (alreadyRunning) {
    debug('UPDATER_ALREADY_RUNNING');
    return;
  }

  debug('STARTING_UPDATER');
  // TODO: register mqtt listening..
}

function stop() {
  if (!alreadyRunning) {
    debug('NO_UPDATER_RUNNING');
    return;
  }

  debug('STOPPING_UPDATER');
  // TODO: remove listeners..
}