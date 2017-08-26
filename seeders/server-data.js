const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];

module.exports = [{
  model: 'Server',
  documents: [{
    url: `${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/1`,
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
    url: `${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/2`,
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
    url: `${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/3`,
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
    url: `${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/4`,
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
}];
