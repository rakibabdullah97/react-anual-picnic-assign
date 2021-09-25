import React from 'react';
import './StudentCard.css'

const StudentCard = (props) => {
    const {name,img,grade,Roll,Location,fare}=props.plan


    return (
        <div className='card-container'>
            <div className="card  ">
                <div className='student-img'>
                <img  src={img} className="card-img-top" alt="..."/>
                </div>
                <div className ="card-body">
                <h4 className ="card-title">Name:{name}</h4>
                <h5 className ="card-text">Class: {grade}</h5>
                <h5 className ="card-text">Roll: {Roll}</h5>
                <h5>Location:{Location}</h5>
                <h5>Cost:${fare}</h5>
                <button onClick={()=>props.handleConfirmPlan(name,fare)} type="button" className="btn btn-success m-1 p-2 ">Add Plan</button>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;