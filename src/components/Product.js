
import React from 'react'

export default function Product(props) {
    // console.log(props)
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.order.image} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.order.name}</h5>
                    <p className="card-text">
                        Rs.{props.order.price}
                    </p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-primary" onClick={() => { props.decQty(props.index) }} >-</button>
                        <button type="button" className="btn btn-primary">{props.order.quantity}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={() => { props.incQty(props.index) }}>+</button>
                    </div>
                    <div className='my-3'>
                        {props.order.quantity * props.order.price}
                    </div>
                    <div className="my-3">
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-danger" onClick={() => { props.removeProd(props.index) }}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
