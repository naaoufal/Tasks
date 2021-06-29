
const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    checkIn : {
        type : String,
        required : true,
    },
    checkOut : {
        type : String,
        required : true,
    }

})

module.exports = mongoose.model('reservation', reservationSchema)