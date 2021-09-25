import React from 'react';

const Cart = (props) => {
    const count = props.addPlan
    const costs = props.cost
    let totalCost = 0;
    for (const cost of costs) {
        totalCost = totalCost + cost;
    }
    return (
        <div className="card-body">
            <h5 className="card-title">Plans Selected:{count.length}</h5>
            <h5 className="card-title">Total Cost:${totalCost}</h5>
            <button type="button" className="btn btn-success m-1 p-2 ">Confirm Plan</button>
        </div>
    );
};

export default Cart;