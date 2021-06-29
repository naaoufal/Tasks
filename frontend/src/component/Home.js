import { useEffect, useState } from "react"
import SideBar from "./SideBar";

export default function Home () {

    // inti states :
    const [hotels, setHotels] = useState([])
    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")

    // render hotel data :
    const renderHotelsData = () => {
        fetch("http://localhost:3002/hotels").then(res => {
            return res.json()
        }).then(data => {
            setHotels(data)
        })
    }

    // order an hotel : 
    const orderHotel = () => {
        fetch("http://localhost:3002/reservation", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name : fullname,
                email : email,
                checkIn : checkIn,
                checkOut : checkOut
            })
        }).then(res => {
            return res.json()
        })
    }

    useEffect(() => {
        renderHotelsData()
    })

    return(
        <div>
            <SideBar />
            <div class="container"> 
                <div class="row">
                    <center>
                        <br />
                        <br />
                        {hotels.map((i) => (
                            <div class="col-md-4">
                                <div class="panel panel-default">
                                    <img src={i.image} />
                                    <div class="panel-body">
                                        <h2>{i.name}</h2>
                                        <p>{i.desc}</p>
                                        <hr />
                                        <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* start modal */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Order An Hotel</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div className="form-group">
                                        <input onChange={event => setFullName(event.target.value)} className="form-control" type="text" placeholder="Enter Your FullName !!!" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={event => setEmail(event.target.value)} className="form-control" type="text" placeholder="Enter Your Email !!!" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={event => setCheckIn(event.target.value)} className="form-control" type="date" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={event => setCheckOut(event.target.value)} className="form-control" type="date" />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal1" onClick={orderHotel}>Onder Now</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* end of modal */}
                        {/* start of second modal */}
                        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Order An Hotel</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div className="panel panel-success">
                                        <div className="panel-heading">
                                            <h2>Success</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* end of second modal */}
                    </center>
                </div>
            </div>
        </div>
    )
}