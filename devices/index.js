'use strict';

const textlabelDriver = require('../lib/device');

module.exports = {
  devices: [
    ...textlabelDriver.devices,
  ],
};