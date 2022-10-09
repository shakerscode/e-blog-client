import React  from 'react';
import { AiOutlineDownCircle, AiOutlineUpCircle } from 'react-icons/ai';

const FilterHeader = ({props, setDown, down}) => {
 
    return (
        <div className='flex justify-between items-center cursor-pointer' onClick={()=> setDown(!down)}>
                    <h2 className='text-xl font-semibold text-primary mb-3 pb-2 border-b border-b-primary'>{props}</h2>
                    {
                    down ?
                    <AiOutlineUpCircle  className='text-2xl text-primary mb-3'/>
                    :
                    <AiOutlineDownCircle  className='text-2xl text-primary mb-3'/>
                    }
                </div>
    );
};

export default FilterHeader;