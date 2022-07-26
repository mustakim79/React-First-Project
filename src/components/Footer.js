import React from 'react'

export default function Footer(props) {
    return (
        <div className="text-center my-4 bg-primary p-3 text-light">
            <div>
                {props.totalAmount}
            </div>
            <button type="button" className="btn btn-outline-light my-3" onClick={props.reset}>Reset</button>
        </div>
    )
}
