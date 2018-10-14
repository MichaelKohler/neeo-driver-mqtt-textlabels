'use strict';

const debug = require('debug')('mk:mqtt-textlabels:controller');

const updater = require('./updater');

module.exports = {
  getRegisterSubscriptionHandlerFunctions,
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

function startUpdater() {
  debug('START_UPDATER');
  updater.start();
}

function stopUpdater() {
  debug('STOP_UPDATER');
  updater.stop();
}