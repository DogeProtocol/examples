var QcReadApi = require('qc-read-js-sdk');

var apiClient = new QcReadApi.ApiClient("https://scan.dpapi.org");
var api = new QcReadApi.AccountsApi(apiClient)

var address = "0xb33c7584ffd241e204e3ec8f4559ab4752ef05396cdbeb4480f2037f5caa0d2c"; // {String} the string representing the address
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    console.log('API called successfully. Returned response: ' + JSON.stringify(response));

    console.log("address = " + address);
    console.log("balance = " + data.result.balance);
    console.log("nonce = " + data.result.nonce);
    /*console.log("nonce = " + data.nonce);
    console.log("blockNumber = " + data.blockNumber);
    console.log("blockDate = " + data.blockDate);*/
  }
};

api.getAccountBalance(address, callback);


