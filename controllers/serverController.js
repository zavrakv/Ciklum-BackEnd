const {serverSchema} = require('../models/server');
const {Farm} = require('../models/farm');
const axios = require('axios');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const server = {
  
  createServer: (req, res) => {
    
    Server.create(req.body)
      .then((server) => {
        res.send(`Server ${server.moduleName} was successfully created!`);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  
  getServerStatus: (req, response) => {
    const { _id, serverId } = req.body;
    
    Farm.findById(_id)
      .then((foundFarm) => {
        
        const url = foundFarm.servers.id(serverId).url;
        
        axios.get(url)
          .then((res) => {
            const parsedData = server.parseServerInfo(res.data);
            response.json(parsedData);
          });
      });
  },
  
  parseServerInfo: (data) => {
    /* TODO: find HTML parser */
    const regex = /^.+ModuleName\:\ ?(.+)\<.+ModuleInitTime\:\ ?(.+)\<.+SystemTime\:\ ?(.*?)\<.+QueuesInsert=(.+)\<.+QueuesInsert\\ToProcess=(.+)\<.+QueuesIn=(.+)\<.+QueuesIn\\ToProcess=(.+)\<.+QueuesOut=(.+)\<.+QueuesOutV2=(.+)\<.+QueuesError=(.+?)\<.+QueuesHealth=(.+?)\<.+ThreadCount=(.+?)\<.+ThreadHealth=(.+?)\<.+DatabaseHealth=(.+?)\<.+$/gm;
    const match = regex.exec(data);
  
    const props = Object.keys(serverSchema.paths);
    const info = {};
    
    for (let i = 1; i < match.length; i++) {
      
      for (let j = 0; j < props.length; j++) {
        if (j === i) {
          info[props[j]] = match[i];
        }
      }
    }
    
    return info;
  },
  
};

module.exports = server;
