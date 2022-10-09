import React from 'react';

const Coupon = () => {
    return (
        <div className='coupon-bg bg-primary my-10 md:w-[90%] w-full mx-auto flex flex-col justify-center items-center rounded-lg'>
            <div className='text-center'>
                <h4 className='text-2xl font-bold text-white'>Get $3 Cashback! Min Order of $30</h4>
                <p className='coupon border-2 border-dashed border-black my-4 py-1 px-4 text-white text-md m-auto  w-56'>Use Code : GROCERY1920</p>
            </div>
        </div>
    );
};

export default Coupon;