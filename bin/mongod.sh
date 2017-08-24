#!/usr/bin/env bash

PATH_TO_MONGO="C:/Program Files/MongoDB/Server/3.4/bin";
DB_PATH="C:/Users/zavrak/ciklum_db";

cd "${PATH_TO_MONGO}";
./mongod.exe --dbpath=${DB_PATH};
