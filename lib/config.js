'use strict';

const debug = require('debug')('mk:mqtt-textlabels:config');

let config;

try {
  config = require('../config.json');
} catch (err) {
  console.error('Could not load "config.json" file. Did you copy the sample and adjust it?');
  process.exit(1);
}

if (!config.mqttURL) {
  console.error('You need to provide "mqttURL" in the config..');
}

module.exports = {
  getMQTTURL,
  getMQTTCredentials,
};

function getMQTTURL() {
  const url = config.mqttURL;
  debug('Getting MQTT URL..', url);

  return url;
}

function getMQTTCredentials() {
  return {
    username: config.mqttUsername || '',
    password: config.mqttPassword || '',
  };
}