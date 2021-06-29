const express = require('express')
const cors = require('cors')
const app = express()
const hotels = require('./data.json')
const mongoose = require('mongoose')
const Reservation = require('./models/reservation')

// connect to database with mongodb:
mongoose.connect("mongodb://localhost/works", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())
app.use(cors())

// get all hotels :
app.get('/hotels', (req, res) => {
    res.json(hotels)
})

// post new reservation :
app.post('/reservation', (req, res) => {
    const order = new Reservation({
        name : req.body.name,
        email : req.body.email,
        checkIn : req.body.checkIn,
        checkOut : req.body.checkOut
    })
    const newOrder = order.save()
    res.json(newOrder)
})

// get all reservations :
app.get('/orders', async (req, res) => {
    const orders = await Reservation.find()
    res.json(orders)
})

// delete Order By ID :
app.delete('/delete/:id', (req, res) => {
    Reservation.findByIdAndDelete(req.params.id).then(() => {
        res.json({message : "Order Deleted"})
    })
})

app.listen(3002, () => console.log("the server is started"))