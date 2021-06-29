import { useEffect, useState } from "react"
import SideBar from "./SideBar";

export default function Orders () {

    // init states :
    const [orders, setOrders] = useState([])

    // render orders data :
    const renderOrderData = () => {
        fetch("http://localhost:3002/orders").then(res => {
            return res.json()
        }).then(data => {
            setOrders(data)
        })
    }

    // delete orders by ID :
    const deleteOrder = (id) => {
        fetch(`http://localhost:3002/delete/${id}`, {
            method : 'DELETE'
        }).then(res => {
            renderOrderData()
        })
    }

    useEffect(() => {
        renderOrderData()
    }, [])

    return(
        <div>
            <SideBar />
            <div className="container">
                <div className="row">
                    <center>
                        <div className="col-md-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>FullName</th>
                                        <th>ChechIn</th>
                                        <th>CheckOut</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((i) => (
                                        <tr>
                                            <td>{i._id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.checkIn}</td>
                                            <td>{i.checkOut}</td>
                                            <td><button onClick={() => deleteOrder(i._id)} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}