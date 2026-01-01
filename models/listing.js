const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;
const Joi = require("joi");
//create schemas foe listing 
const listingSchema = new Schema ({
    title:{
     type:String,
     required:true   
    },
    description:String,
    image: {
    url: String,
    filename: String,
},
    price:Number,
    location:String,
    country:String,
    reviews:[
      {
       type:Schema.Types.ObjectId, 
       ref:"Review",
      },
    ],
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
    },
});

//MIDDLEWARE to handle deleted review with respect to listing
listingSchema.post("findOneAndDelete", async (listing) =>{
  if(listing){
    await Review.deleteMany({ _id: { $in: listing.reviews } } );
  }
  

});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;