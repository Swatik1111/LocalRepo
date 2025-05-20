import React, { useState } from 'react'
// import './App.css'

function Forms() {
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();



    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }
    function handleCommentChange(event) {
        setComment(event.target.value)
    }
    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }
    function handleShippingChange(event) {
        setShipping(event.target.value)
    }




    return (<div className="form-container">
        <input type="text" onChange={handleNameChange} />
        <p>Name:{name}</p>
        <input type="number" onChange={handleQuantityChange} />
        <p>Quantity:{quantity}</p>
        <input type="textarea" onChange={handleCommentChange} />
        <p>Comment:{comment}</p>
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Gift">Gift</option>
        </select>
        <p>Payment:{payment}</p>
        <br></br>
        <label>
            <input type="radio" value="Pick UP" onChange={handleShippingChange} checked={shipping === "Pick UP"} />Pick Up
        </label>
        <label>
            <input type="radio" value="Home Delivery" onChange={handleShippingChange} checked={shipping === "Home Delivery"} />Home Delivery
        </label>


    </div >);

}


export default Forms