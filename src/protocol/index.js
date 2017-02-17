import axios from 'axios';

const protocol = (base) => {
  base = `${base}/protocol`
  return ({
    /**
    * @summary Disconnect from the device
  	* @name disconnect
  	* @public
  	* @function
  	* @memberof agile.protocol
  	* @param {String} protocolId - Agile Id of the protocol
    * @param {String} deviceId - Agile internal Id of the protocol
  	* @fulfil {Undefined}
  	* @returns {Promise}
  	*
  	* @example
  	* agile.protocol.disconnect(deviceId, componentId).then(function() {
  	*  console.log('Disconnected!');
  	* });
    **/
    disconnect: () => axios({
      method: 'POST',
      url: `${base}/${protocolId}/connection/${deviceId}`,
    })
    .then(res => (res.data)),
    /**
    * @summary Connect to the device
  	* @name connect
  	* @public
  	* @function
  	* @memberof agile.protocol
  	* @param {String} protocolId - Agile Id of the protocol
    * @param {String} deviceId - Agile internal Id of the protocol
  	* @fulfil {Undefined}
  	* @returns {Promise}
  	*
  	* @example
  	* agile.protocol.connect(deviceId, componentId).then(function() {
  	*  console.log('Connected!');
  	* });
    **/
    connect: () => axios({
      method: 'DELETE',
      url: `${base}/${protocolId}/connection/${deviceId}`,
    })
    .then(res => (res.data)),
    /**
    * @summary Call a read via protocol
  	* @name read
  	* @public
  	* @function
  	* @memberof agile.protocol
  	* @param {String} protocolId - Agile Id of the protocol
    * @param {String} deviceId - Agile internal Id of the protocol
  	* @fulfil {Object}
  	* @returns {Promise}
  	*
  	* @example
  	* agile.protocol.read(deviceId, componentId).then(function(data) {
  	*  console.log(data);
  	* });
    **/
    read: () => axios({
      url: `${base}/${protocolId}/${deviceId}`,
    })
    .then(res => (res.data)),
    /**
    * @summary Call a write via protocol
  	* @name write
  	* @public
  	* @function
  	* @memberof agile.protocol
  	* @param {String} protocolId - Agile Id of the protocol
    * @param {String} deviceId - Agile internal Id of the protocol
    * @param {object} data - An object containing the content to write
  	* @fulfil {Undefined}
  	* @returns {Promise}
  	*
  	* @example
  	* agile.protocol.write(deviceId, componentId).then(function() {
  	*  console.log('wrote data!');
  	* });
    **/
    write: () => axios({
      method: 'POST',
      url: `${base}/${protocolId}/${deviceId}`,
    })
    .then(res => (res.data)),
  })
}

export default protocolManager;
