
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//use default for newer version of passportLocalMongoose
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email:{
        type:String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);