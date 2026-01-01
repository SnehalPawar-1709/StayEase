const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//database connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

  main()
    .then(() =>{
        console.log("connected to DB");
    })
    .catch((err) =>{
       console.log(err);
    });
  
  async function main(){
    await mongoose.connect(MONGO_URL );
  }

  const initDB = async () =>{
   try{ 
    await Listing.deleteMany({});
   initData.data = initData.data.map((obj) =>({...obj,owner:"693d6a94a1b3737d039706c9"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialize");
  } catch (err){
    console.log(err);
  }
};
  initDB();