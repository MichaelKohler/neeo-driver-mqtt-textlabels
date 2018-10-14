'use strict';

const neeo = require('neeo-sdk');

const controller = require('./controller');
const config = require('./config');

const driver = neeo.buildDevice('MQTT Textlabels')
  .setManufacturer('NEEO')
  .setType('ACCESSORY')
  .registerDeviceSubscriptionHandler(controller.getRegisterSubscriptionHandlerFunctions())
  .registerSubscriptionFunction(controller.registerSubscriptionFunction);

const textlabels = config.getTextlabels();
textlabels.map((textlabel) => {
  driver.addTextLabel({
    name: textlabel.name,
    label: textlabel.label,
  }, () => {});
});

module.exports = {
  devices: [
    driver,
  ],
};