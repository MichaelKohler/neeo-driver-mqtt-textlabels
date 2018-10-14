'use strict';

const debug = require('debug')('mk:mqtt-textlabels:mqtt');
const MQTT = require('mqtt');
const config = require('./config');

const mqttURL = config.getMQTTURL();
const { username, password } = config.getMQTTCredentials();
let mqttOptions = {};

if (username && password) {
  mqttOptions = {
    username,
    password,
  };
}

module.exports = {
  start,
};

function start(topics) {
  debug('Creating client for ..', mqttURL);
  const client = MQTT.connect(mqttURL, mqttOptions);

  client.on('connect', () => {
    debug('MQTT_CLIENT_CONNECTED');

    registerListeners(topics);
  });

  client.on('error', (error) => {
    console.log(error);
  });
}

function registerListeners(topics) {
  // TODO: register on the topics
  // TODO: Emit message when topic updated
}