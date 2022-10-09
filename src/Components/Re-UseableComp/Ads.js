import React from 'react';

const Ads = ({url}) => {
    return (
        <div className='md:w-[80%] w-full mx-auto my-8'>
            <img src={url} alt="" className='w-full h-auto'/>
        </div>
    );
};

export default Ads;