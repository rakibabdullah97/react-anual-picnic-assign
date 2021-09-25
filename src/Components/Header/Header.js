import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-success p-2 text-white text-center'>
            <h1>Anual <span className='text-warning'>Picnic</span> of Our school</h1>
            <h2>Students Shared their Plans</h2>
            <h1>Our Budget <span className='text-warning'>$1000</span></h1>
        </div>
    );
};

export default Header;