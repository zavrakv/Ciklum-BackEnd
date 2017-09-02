# Ciklum-BackEnd

I've hosted this API at http://207.154.201.232:3000

To run this back-end API follow these steps:

1. Clone project ```git clone https://github.com/zavrakv/Ciklum-BackEnd.git``` and open directory ```cd Ciklum-BackEnd```
2. Install all dependencies with ```npm install```
3. Open ```config/config.json.example``` and rename it to just ```config/config.json```
4. Now you need MongoDB instance to be running. To simplify a bit this task, I've created a separate npm command ```npm run mongo```.
In the ```bin/mongod.sh``` specify your paths to Mongo binary and database path. After that just run this task inside git ```bash```.
5. After MongoDB was successfully started, run seeders file: ```npm run seedersDev``` and it will create some farms with servers inside
6. Run ```npm run serveDev```
7. If you will open ```WHITE_LIST``` array in config.json, you will see there localhost's ips, so for now you will see endpoint information 
directly. To prevent this wipe out all info from that array.
