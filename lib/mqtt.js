'use strict';

const debug = require('debug')('mk:mqtt-textlabels:mqtt');
const MQTT = require('mqtt');
var events = require('events');
var eventEmitter = new events.EventEmitter();
const config = require('./config');

const mqttURL = config.getMQTTURL();
const { username, password } = config.getMQTTCredentials();
const topics = config.getTextlabelTopics();
let mqttOptions = {};

if (username && password) {
  mqttOptions = {
    username,
    password,
  };
}

module.exports = {
  start,
  eventEmitter,
};

function start() {
  debug('Creating client for ..', mqttURL);
  const client = MQTT.connect(mqttURL, mqttOptions);

  client.on('connect', () => {
    debug('MQTT_CLIENT_CONNECTED');
  });

  topics.map((topic) => {
    client.subscribe(topic, (err) => {
      if (err) {
        debug('ERR_SUBSCRIBING', topic, err);
        return;
      }

      debug('TOPIC_SUBSCRIBED', topic);
    });
  });

  client.on('message', (topic, message) => {
    eventEmitter.emit('update', topic, message.toString());
  });

  client.on('error', (error) => {
    console.log(error);
  });
}