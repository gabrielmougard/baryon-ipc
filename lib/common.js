'use strict';

exports.getResponseChannel = (methodName) => `baryon-ipc-${methodName}-response`;