import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiOutlineEye } from 'react-icons/ai'
const Card = ({product}) => {
    return (
        <div 
        // onClick={()=> handleproduct(product._id)}
        className='px-3 py-2 hover:shadow-lg flex flex-col justify-between items-center rounded-lg transition-all duration-500 ease-in-out gap-4  bg-white shadow relative'>
        <img src={product?.image} alt="" className='h-32 mx-auto pb-2' />
        <div className=''>
        <h4 className='text-md md:text-lg'>{product?.title.slice(0, 40)}...</h4>
        <p className='md:text-xl text-lg font-semibold text-secondary'>৳ {product.price}</p>
        <p className='text-sm text-gray pb-1'>Quantity: {product?.quantity} ps</p>
        <div className='bg-gray rounded-full w-28'>
            <div 
            style={{ 
                width: `${product?.quantity}%`
            }}
            className='bg-secondary py-1 rounded-full'></div>
        </div>
        <div className='mb-3'>
            <span className='text-gray mr-2 line-through'>{product?.perviousPrice}</span>
            <span>-{product.off}</span>
        </div> 
        </div>
        <div className='flex justify-between items-center md:gap-2 gap-8'>
            <button className='bg-secondary text-white p-3 rounded-full flex justify-end items-center my-2 active:shadow-lg transition-all ease-in-out duration-500 hover:translate-x-1'><AiOutlineEye className='text-lg font-semibold' /></button>
            <button className='bg-secondary text-white p-3 md:px-4 md:py-2 rounded-full flex justify-end items-center my-2 active:shadow-lg transition-all ease-in-out duration-500 hover:translate-x-1 gap-4'><p className='text-md hidden md:block'>Add to</p><HiOutlineShoppingBag className='text-lg font-semibold' /></button> 
        </div>
        {product?.quantity === 0 && 
        <div className='absolute bg-bgLightBlack h-full w-full top-0 left-0 right-0 bottom-0  rounded-lg'>
            <p className=' text-white text-xl absolute top-[50%] left-14 right-14 font-semibold'>Sold Out</p>
        </div>
        }
    </div>
    );
};

export default Card;