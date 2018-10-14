'use strict';

const neeo = require('neeo-sdk');

const controller = require('./controller');

const driver = neeo.buildDevice('MQTT Textlabels')
  .setManufacturer('NEEO')
  .setType('ACCESSORY')
  .registerDeviceSubscriptionHandler(controller.getRegisterSubscriptionHandlerFunctions());

module.exports = {
  devices: [
    driver,
  ],
};