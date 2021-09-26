import React, { useEffect, useState } from 'react';
import StudentCard from '../card/StudentCard';
import Cart from '../Cart/Cart';
import './Student.css'

//useState section starts 
const Student = () => {
    const [plans, setPlans] = useState([])
    const [addPlan, setAddPlan] = useState([])
    const [cost, setCost] = useState([])

    // useEffect section starts 
    useEffect(() => {
        fetch('./students.JSON')
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])

    // button handler section starts 
    const handleConfirmPlan = (plan, fare) => {
        const newAddPlan = [...addPlan, plan]
        const newCost = [...cost, fare]
        setAddPlan(newAddPlan);
        setCost(newCost);
    }
    return (
        <div className='plan-container container m-5 row  '>
            <div className='student-container'>
                {
                    plans.map((plan, index) => <StudentCard
                        key={index}
                        plan={plan}
                        handleConfirmPlan={handleConfirmPlan}
                    ></StudentCard>)
                }
            </div>
            {/* Cart display  area here */}
            <div className='cart-container m-3'>
                <Cart
                    addPlan={addPlan}
                    cost={cost}
                ></Cart>
            </div>
        </div>
    );
};

export default Student;