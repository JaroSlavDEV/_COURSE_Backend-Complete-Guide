var pm2Config = {
    "apps": [
      {
        "name": "service-1",
        "script": "service-1.js",
        "instances": 1
      },
      {
        "name": "service-2",
        "script": "service-2.js",
        "instances": 1
      },
      {
        "name": "service-3",
        "script": "service-3.js",
        "instances": 1
      }
    ]
};

module.exports = pm2Config;