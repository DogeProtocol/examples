var QcReadApi = require('qc-read-js-sdk');

var apiClient = new QcReadApi.ApiClient("https://relayread1.dpapi.org");
var api = new QcReadApi.ReadApi(apiClient);

var address = "0x0000000000000000000000000000000000000000000000000000000000001000"; // {String} the string representing the address
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    console.log('API called successfully. Returned response: ' + JSON.stringify(response));

    console.log("address = " + address);
    console.log("balance = " + data.result.balance);
    console.log("nonce = " + data.result.nonce);
  }
};

api.getAccountDetails(address, callback);


