import React from 'react';
import {BsArrowRight} from 'react-icons/bs'

const ReadMoreBtn = ({children, mainBlog}) => {
    return (
        <button className={`${mainBlog === true ? 'hover:bg-secondary transition-all ease-in-out duration-700' : 'absolute top-0 right-0 btn-round transition-all ease-in-out duration-700 hover:bg-secondary'} 'btn-round flex justify-between items-center gap-4 px-6 py-2 text-md bg-primary text-white  font-semibold  hover:bg-secondary'`}>{children} <BsArrowRight/></button>
    );
};

export default ReadMoreBtn;