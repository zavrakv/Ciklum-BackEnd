const {serverSchema} = require('../models/server');
const {Farm} = require('../models/farm');
const axios = require('axios');
const mongoose = require('mongoose');
const q = require('q');
mongoose.Promise = require('bluebird');

const server = {
  
  createServer(req, res) {
    
    const { farm_id, url, moduleName } = req.body;
    
    Farm.findById(farm_id)
      .then((farm) => {
        farm.servers.push({ url, moduleName });
        farm.save()
          .then((server) => {
            res.send(`Server ${server.moduleName} was successfully created!`);
          })
          .catch((err) => {
            res.send(err);
          });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  
  getServerStatus(req, response) {
    const { _id, serverId } = req.body;
    
    Farm.findById(_id)
      .then((foundFarm) => {
        
        const url = foundFarm.servers.id(serverId).url;
        
        axios.get(url)
          .then((res) => {
            const parsedData = server.parseServerInfo(res.data);
            response.json(parsedData);
          })
          .catch((err) => {
            response.send(err.message);
          })
      })
      .catch((err) => {
        response.send(err);
      })
  },
  
  getAllServersStatus(req, response) {
    
    const farmId = req.query.id;
    let promise;
    
    farmId ?
      promise = Farm.findById(farmId):
      promise = Farm.find();
    
    promise
      .then((farms) => {
        const promises = [];
        
        let farmsArr = [];
        
        farmId ?
          farmsArr.push(farms):
          farmsArr = farms;
       
        farmsArr.forEach((farm) => {
          farm.servers.forEach((module) => {
            let url = module.url;
            let promise = getAll(url);

            promises.push(promise);
          });
        });

        q.all(promises).then((data) => {
          response.send(data);
        });
      });
  
    function getAll(url) {
      return axios.get(url)
        .then((res) => {
          return server.parseServerInfo(res.data);
        })
    }
  },
  
  parseServerInfo(data) {
    /* TODO: find HTML parser */
    const regex = /^.+ModuleName\:\ ?(.+)\<.+ModuleInitTime\:\ ?(.+)\<.+SystemTime\:\ ?(.*?)\<.+QueuesInsert=(.+)\<.+QueuesInsert\\ToProcess=(.+)\<.+QueuesIn=(.+)\<.+QueuesIn\\ToProcess=(.+)\<.+QueuesOut=(.+)\<.+QueuesOutV2=(.+)\<.+QueuesError=(.+?)\<.+QueuesHealth=(.+?)\<.+ThreadCount=(.+?)\<.+ThreadHealth=(.+?)\<.+DatabaseHealth=(.+?)\<.+$/gm;
    const match = regex.exec(data);
  
    const props = Object.keys(serverSchema.paths);
    const info = {};
    
    if (match) {
      for (let i = 1; i < match.length; i++) {
        for (let j = 0; j < props.length; j++) {
          if (j === i) {
            info[props[j]] = match[i];
          }
        }
      }
    } else {
      info.message = data.message;
    }
    
    return info;
  },
  
};

module.exports = server;
