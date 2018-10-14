'use strict';

const debug = require('debug')('mk:mqtt-textlabels:controller');
const mqtt = require('./mqtt');
const config = require('./config');

let alreadyRunning = false;

module.exports = {
  start,
  stop,
};

function start(updateFunction) {
  if (alreadyRunning) {
    debug('UPDATER_ALREADY_RUNNING');
    return;
  }

  debug('STARTING_UPDATER');
  mqtt.start();
  mqtt.eventEmitter.on('update', (topic, message) => {
    updateTextlabel(updateFunction, topic, message);
  });
  alreadyRunning = true;
}

function stop() {
  if (!alreadyRunning) {
    debug('NO_UPDATER_RUNNING');
    return;
  }

  debug('STOPPING_UPDATER');
  mqtt.eventEmitter.removeAllListeners();
}

function updateTextlabel(updateFunction, topic, message) {
  debug('UPDATE_TEXTLABEL', topic, message);

  const textlabel = config.getTextlabelByTopic(topic);

  debug('FOUND_TEXTLABEL', textlabel);

  updateFunction({
    uniqueDeviceId: 'default',
    component: `${textlabel.name}_SENSOR`,
    value: message,
  });
}