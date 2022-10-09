import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Button = ({children}) => {
    return (
        <button className='bg-red md:px-4 px-3 text-sm py-2 text-white rounded-full flex gap-2 items-center hover:translate-x-2 transition-all duration-500 ease-in-out'><Link className='flex gap-2 items-center' to='/shop'>{children
        }<BsArrowRight/></Link></button> 

    );
};

export default Button;