var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*Foodwater options:
Option1 :
Option2 : 
*/
var VictimSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    foodWater: {
        type: Number,
        required: true
    },
    calamity: {
        type: String,
        required: true  
    },
    withYou: {
        type: Number,
        required: true,
        default: 1
    }
})

var RescueSchema = new Schema({
    organization: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

var HelperSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    volunteer: {
        type: Boolean,
        default: false
    },
    shelter: {
        type: Boolean,
        default: false
    }
})

exports.Victim = mongoose.model('Victim', VictimSchema);
exports.Rescuer = mongoose.model('Rescue', RescueSchema);
exports.Helper = mongoose.model('Helper', HelperSchema);
