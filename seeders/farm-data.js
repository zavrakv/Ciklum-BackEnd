const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];

module.exports = [{
  model: 'Farm',
  documents: [{
    name: 'farmOne',
    servers: [{
      url: `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/1`,
      moduleName: 'module1',
      moduleInitTime: new Date(),
      systemTime: new Date(),
      queuesInsert: null,
      queuesInsertToProcess: null,
      queuesIn: null,
      queuesInToProcess: null,
      queuesOut: null,
      queuesOutV2: null,
      queuesError: null,
      queuesHealth: null,
      threadCount: 4,
      threadHealth: null,
      databaseHealth: null
    },{
    url: `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/2`,
    moduleName: 'module2',
    moduleInitTime: new Date(),
    systemTime: new Date(),
    queuesInsert: null,
    queuesInsertToProcess: null,
    queuesIn: null,
    queuesInToProcess: null,
    queuesOut: null,
    queuesOutV2: null,
    queuesError: null,
    queuesHealth: null,
    threadCount: 4,
    threadHealth: null,
    databaseHealth: null
  },{
    url: `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/3`,
    moduleName: 'module3',
    moduleInitTime: new Date(),
    systemTime: new Date(),
    queuesInsert: null,
    queuesInsertToProcess: null,
    queuesIn: null,
    queuesInToProcess: null,
    queuesOut: null,
    queuesOutV2: null,
    queuesError: null,
    queuesHealth: null,
    threadCount: 4,
    threadHealth: null,
    databaseHealth: null
  },{
    url: `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/4`,
    moduleName: 'module4',
    moduleInitTime: new Date(),
    systemTime: new Date(),
    queuesInsert: null,
    queuesInsertToProcess: null,
    queuesIn: null,
    queuesInToProcess: null,
    queuesOut: null,
    queuesOutV2: null,
    queuesError: null,
    queuesHealth: null,
    threadCount: 4,
    threadHealth: null,
    databaseHealth: null
    }]
  }, {
    name: 'farmTwo',
    servers: [{
      url: `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/5`,
      moduleName: 'module5',
      moduleInitTime: new Date(),
      systemTime: new Date(),
      queuesInsert: null,
      queuesInsertToProcess: null,
      queuesIn: null,
      queuesInToProcess: null,
      queuesOut: null,
      queuesOutV2: null,
      queuesError: null,
      queuesHealth: null,
      threadCount: 8,
      threadHealth: null,
      databaseHealth: null
    },{
      url: `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/6`,
      moduleName: 'module6',
      moduleInitTime: new Date(),
      systemTime: new Date(),
      queuesInsert: null,
      queuesInsertToProcess: null,
      queuesIn: null,
      queuesInToProcess: null,
      queuesOut: null,
      queuesOutV2: null,
      queuesError: null,
      queuesHealth: null,
      threadCount: 8,
      threadHealth: null,
      databaseHealth: null
    }]
  }, {
    name: 'farmThree',
    servers: [{
      url: `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/7`,
      moduleName: 'module7',
      moduleInitTime: new Date(),
      systemTime: new Date(),
      queuesInsert: null,
      queuesInsertToProcess: null,
      queuesIn: null,
      queuesInToProcess: null,
      queuesOut: null,
      queuesOutV2: null,
      queuesError: null,
      queuesHealth: null,
      threadCount: 16,
      threadHealth: null,
      databaseHealth: null
    },{
      url: `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/8`,
      moduleName: 'module8',
      moduleInitTime: new Date(),
      systemTime: new Date(),
      queuesInsert: null,
      queuesInsertToProcess: null,
      queuesIn: null,
      queuesInToProcess: null,
      queuesOut: null,
      queuesOutV2: null,
      queuesError: null,
      queuesHealth: null,
      threadCount: 16,
      threadHealth: null,
      databaseHealth: null
    }]
  }]
}];
