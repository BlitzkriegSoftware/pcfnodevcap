var cfenv = require("cfenv");

var cfData = cfenv.getAppEnv();

module.exports = cfData;