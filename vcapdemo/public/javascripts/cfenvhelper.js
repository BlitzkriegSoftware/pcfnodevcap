var cfenv = require("cfenv");
var fs = require("fs");
var path = require("path");

var cfInfo = cfenv.getAppEnv();

var vcs = process.env.VCAP_SERVICES;

if(!vcs) {
  var svc = [];
  
  var svcFile = path.join(__dirname, '..', '..', 'UPS', 'vcapdemo-service01.json');
  var item = MakeSvc(svcFile);
  svc.push(item);

  svcFile = path.join(__dirname, '..', '..', 'UPS', 'vcapdemo-service02.json');
  item = MakeSvc(svcFile);
  svc.push(item);

  var vcsv = { };
  vcsv["user-provided"] = svc;

  cfInfo.services = vcsv;

  cfInfo.listProps = function (serviceName) { 
    var props = [ ];
    var ups = { };
    var creds = this.services["user-provided"];

    creds.forEach(function (s) {
      if(s.name == serviceName) {
        ups = s;
        return;
      }
    });
    
    var uc = ups["credentials"];

    Object.keys(uc).map(function(objectKey, index) {
      var value = uc[objectKey];
      var item = { };
      item.name = objectKey;
      item.value = value;
      props.push(item);
    });

    return props;
  }
}

var vap = process.env.VCAP_APPLICATION;

if(!vap) {
  cfInfo.app["name"] = "Demo";
  cfInfo.app["version"] = "(version)";
}

module.exports = cfInfo;

function MakeSvc(serviceFile) {
    var credsText = fs.readFileSync(serviceFile, 'UTF8');
    var creds = JSON.parse(credsText);
  
    var serviceName = serviceFile.replace('.json', '');
    var index = serviceName.lastIndexOf('/');
    if(index < 0) index = serviceName.lastIndexOf('\\');
  
    serviceName = serviceName.substring(index + 1);
  
    var svc = {};
  
    svc["tags"] = [ ];
    svc["volume_mounts"] = [ ],
    svc["name"] = serviceName;
    svc["label"] = "user-provided";
    svc["syslog_drain_url"] = "";
    svc["credentials"] = creds;
  
    return svc;
  }