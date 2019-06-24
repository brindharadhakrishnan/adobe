module.exports = {
  "dataElements": {
    "CheckInput": {
      "modulePath": "clean-string-util/src/lib/dataElements/cleanTextExt.js",
      "settings": {
        "value": "PORT_NAME_SYMANTEC_PKI_CLIET_CONTENT"
      },
      "storageDuration": "pageview",
      "forceLowerCase": false,
      "cleanText": false
    }
  },
  "rules": [{
    "id": "RL1556801542819",
    "name": "TestRule",
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "sandbox/logEventInfo.js",
      "settings": {}
    }]
  }],
  "extensions": {},
  "property": {
    "settings": {}
  },
  "company": {
    "orgId": "5F9B8A1A54FA14BA0A4C98A6@AdobeOrg"
  },
  "buildInfo": {
    "turbineVersion": "25.4.1",
    "turbineBuildDate": "2019-06-20T05:55:26.809Z",
    "buildDate": "2019-06-20T05:55:26.809Z",
    "environment": "development"
  }
}