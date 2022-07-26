import React from 'react';
import Product from './Product.js';
function ProductList(props) {
    // console.log(props)
    // console.log(order)
    return (
        props.orderListst.length != 0 ?
            props.orderListst.map((order, i) => {
                return <Product order={order} key={i} index={i} incQty={props.incQty} decQty={props.decQty} removeProd={props.removeProd} />
            })
            : <div className='text-center col-12'><h2 >Your cart is empty !</h2></div>
    );
}

export default ProductList;