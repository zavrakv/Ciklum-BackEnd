const express = require('express');

const { farmSchema, Farm } = require('../models/farm');

// const models = require('../../models');
// const env = process.env.NODE_ENV || 'development';
// const config = require('../../config/config.json')[env];


const farm = {
  
  createFarm: (res) => {
    Farm.create(res.body, function (err, servers) {
      console.log(servers)
    });
  },
  
  getAllFarms: (res) => {
    Farm.find().then((res) => {
      console.log(res);
    })
  }
};

module.exports = farm;
