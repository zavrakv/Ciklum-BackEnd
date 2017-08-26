const {Server} = require('../models/server');
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
    const _id = req.query._id;
    
    Server.findOne({_id})
      .then((res) => {
        const url = res.url;
        console.log(url);
        
        axios.get(url)
          .then((res) => {
            const parsedData = server.parseServerInfo(res.data);
            response.json(parsedData);
          });
        
      })
  },
  
  parseServerInfo: (data) => {
    const regex = /^.+ModuleName\:\ ?(.+)\<.+ModuleInitTime\:\ ?(.+)\<.+SystemTime\:\ ?(.*?)\<.+QueuesInsert=(.+)\<.+QueuesInsert\\ToProcess=(.+)\<.+QueuesIn=(.+)\<.+QueuesIn\\ToProcess=(.+)\<.+QueuesOut=(.+)\<.+QueuesOutV2=(.+)\<.+QueuesError=(.+?)\<.+QueuesHealth=(.+?)\<.+ThreadCount=(.+?)\<.+ThreadHealth=(.+?)\<.+DatabaseHealth=(.+?)\<.+$/gm;
    const match = regex.exec(data);
  
    const props = Object.keys(Server.schema.paths);
    
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
