exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'features/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },  

  baseUrl: 'http://localhost:8383/GodHasAPlan/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
