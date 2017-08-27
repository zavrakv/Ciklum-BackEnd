const { Farm } = require('../models/farm');
const { Endpoint } = require('../models/endpoint');


const farm = {
  
  createFarm: (req, res) => {
    Farm.create(req.body)
      .then((farm) => {
        res.send(`Farm ${farm.name} was successfully created!`);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  
  getFarmById: (req, res) => {
    Farm.findOne({ _id: req.query.id })
      .then((farm) => {
        res.send(farm);
      })
      .catch((err) => {
        res.send(err);
      })
  },
  
  getAllFarms: (req, res) => {
    Farm.find()
      .then((farms) => {
        res.send(farms);
      })
  },
  
  updateFarm: (req, res) => {
    Farm.findOneAndUpdate({ _id: req.body._id }, req.body)
      .then((farm => {
        res.send(farm);
      }))
  },
  
  deleteFarm: (req, res) => {
    Farm.findOne({ _id: req.query.id })
      .then((farms) => {
        res.send(farms);
      })
  }
};

module.exports = farm;
