import React from 'react';
import { useParams } from 'react-router-dom';

const BlobPost = () => {
    const { title } = useParams();
    return (
        <div className='md:px-14 px-4 my-5'>
            <div className='border-b border-gray py-2'>
                <h1 className='text-4xl font-semibold '>{title}</h1>
                <div className='flex gap-5 py-3 text-black'>
                    <p>Writer: admin</p>
                    <p>Tag: health</p>
                    <p>Date: 10 Sept, 2022</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center py-5'>
                <img src="https://img.freepik.com/free-vector/healthy-food-pyramid-chart_1308-50311.jpg" alt="" />
                <div>
                    <h2 className='text-center text-4xl font-bold py-5'>{title}</h2>
                    <p className='text-justify mx-auto  w-[60%]'> 
                    lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok? lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok?lorem is lorem and lorem is lorem. so lorem is lorem. and so lorem is lorem. as we know lorem is  lorem. its lorem. ok? 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlobPost;