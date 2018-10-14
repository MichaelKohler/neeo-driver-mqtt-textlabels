'use strict';

const debug = require('debug')('mk:mqtt-textlabels:controller');

const updater = require('./updater');

let updateFunction;

module.exports = {
  getRegisterSubscriptionHandlerFunctions,
  registerSubscriptionFunction,
};

function getRegisterSubscriptionHandlerFunctions() {
  return {
    deviceAdded: () => {
      startUpdater();
    },
    deviceRemoved: () => {
      stopUpdater();
    },
    initializeDeviceList: (deviceIds) => {
      if (deviceIds && deviceIds.length > 0) {
        startUpdater();
      }
    },
  };
}

function registerSubscriptionFunction(updateFn) {
  debug('REGISTER_UPDATE_FUNCTION');
  updateFunction = updateFn;
}

function startUpdater() {
  debug('START_UPDATER');
  updater.start(updateFunction);
}

function stopUpdater() {
  debug('STOP_UPDATER');
  updater.stop();
}