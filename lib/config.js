'use strict';

const debug = require('debug')('mk:mqtt-textlabels:config');

let config;

try {
  config = require('../config.json');
} catch (err) {
  console.error('Could not load "config.json" file. Did you copy the sample and adjust it?');
  process.exit(1);
}

if (!config.mqttURL || !config.mappings) {
  console.error('You need to provide "mqttURL" and specific "mappings" in the config..');
}

module.exports = {
  getMQTTURL,
  getMQTTCredentials,
  getTextlabels,
  getTextlabelTopics,
  getTextlabelByTopic,
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

function getTextlabelTopics() {
  return config.mappings.map((mapping) => {
    return mapping.topic;
  });
}

function getTextlabels() {
  return config.mappings;
}

function getTextlabelByTopic(topic) {
  return config.mappings.find((mapping) => {
    return mapping.topic === topic;
  });
}