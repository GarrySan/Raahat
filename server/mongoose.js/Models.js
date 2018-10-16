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
    victims: {
        type: Number,
        
    }


})
