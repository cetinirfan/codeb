const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Offer = new Schema({
    title:{
        type:String,
    },
    descrption:{
        type:String,
    },
    offerPhoto:{
        type:String,
        default:'uploads/default/user.png',
    },
    comments:[{
        userComment:{type:String},
        userTc:{type:Number},
    }],
    offerCreated:{
        type:Date,
        default:Date.now()
    }

});

module.exports = mongoose.model('Offer', Offer);
