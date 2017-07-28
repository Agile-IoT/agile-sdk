/*******************************************************************************
 *Copyright (C) 2017 Resin.io, UNI Passau.
 *All rights reserved. This program and the accompanying materials
 *are made available under the terms of the Eclipse Public License v1.0
 *which accompanies this distribution, and is available at
 *http://www.eclipse.org/legal/epl-v10.html
 *
 *Contributors:
 *    Resin.io, UNI Passau - initial API and implementation
 ******************************************************************************/
import axios from 'axios';
import discovery from './discovery';
import { errorHandler } from '../utils';

const protocolManager = (base) => {
  base = `${base}/protocols`;
  return ({
    /**
    * @summary Get the list of registered protocols
    * @name get
    * @public
    * @function
    * @memberof agile.protocolManager
    * @fulfil {Array} - protocols
    * @returns {Promise}
    * @example
    * agile.protocolManager.protocols.get().then(function(protocols) {
    *   console.log(protocols);
    * });
    **/
    get: () => axios({
      method: 'GET',
      url: `${base}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Unregister a Dbus Protocol object reference
    * @name delete
    * @public
    * @function
    * @memberof agile.protocolManager
    *
    * @param {String} protocolId - Agile protocol Id
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.protocols.delete(protocolId).then(function() {
    *   console.log('protocol has been unregistered');
    * });
    **/
    delete: () => axios({
      method: 'DELETE',
      url: `${base}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Register a new Dbus object implementing the protocol API
    * @name create
    * @public
    * @function
    * @memberof agile.protocolManager
    *
    * @param {String} protocolId - Agile protocol Id
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.protocols.create(protocolId).then(function() {
    *   console.log('protocol has been registered');
    * });
    **/
    status: () => axios({
      method: 'POST',
      url: `${base}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary List all discovered devices on all available protocols
    * @name devices
    * @public
    * @function
    * @memberof agile.protocolManager
    *
    * @fulfil {Array} - devices
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.devices().then(function(devices) {
    *  console.log(devices);
    * });
    **/
    devices: () => axios({
      url: `${base}/devices`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @namespace discovery
    * @memberof agile.protocolManager
    **/
    discovery: discovery(base)
  });
};

export default protocolManager;
