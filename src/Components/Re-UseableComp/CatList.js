import React from 'react';
import { Link } from 'react-router-dom';

const CatList = ({list, handleCat}) => {
    return (
        <li 
        onClick={() => handleCat(list)}
        className='cursor-pointer hover:text-secondary hover:bg-light hover:rounded-md  py-2  px-5 transition-all ease-in-out duration-250'>{list}</li>
    );
};

export default CatList;