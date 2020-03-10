const axios = require('axios');

function _getbase (url, username, password, callback) {
    axios.get(url, {
        auth: { username: username, password: password },
        responseType: 'json',
    })
        .then(function (response) {
            callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
            callback(null);
        });
}
function retrieveProcessApps (baseUrl, username, password, callback) {
    var path = "/rest/bpm/wle/v1/processApps";
    _getbase(baseUrl + path, username, password, callback);
}

exports.retrieveProcessApps = retrieveProcessApps;


function retrieveToolkits (baseUrl, username, password, callback) {
    var path = '/rest/bpm/wle/v1/toolkit';
    _getbase(baseUrl + path, username, password, callback);
}

exports.retrieveToolkits = retrieveToolkits;

function processAppsSetting (baseUrl, username, password, snapshotId, callback) {
    var path = "/rest/bpm/wle/v1/processAppSettings?snapshotId=" + snapshotId + "&recurse=false";
    _getbase(baseUrl + path, username, password, callback);
}

exports.processAppsSetting = processAppsSetting;