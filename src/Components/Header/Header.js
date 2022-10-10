import React, { useState } from 'react'; 
import { IoCloseCircleOutline } from 'react-icons/io5'
 import { BsJustifyLeft } from 'react-icons/bs' 

const Header = () => { 
    const [open, setOpen] = useState(false)  
    const menus = [
        { m: 'Home', link: '/' },
        { m: 'Our Shop', link: 'https://expansionmart.netlify.app/shop' },
        { m: 'Policy', link: 'https://expansionmart.netlify.app/policy' },
        { m: 'Contact', link: 'https://expansionmart.netlify.app/contact' },
        { m: 'About', link: 'https://expansionmart.netlify.app/about' },
    ]
   

 

    return (
        <header className='shadow sticky top-0 bg-white z-50'> 
            <div className={`flex justify-between items-center md:px-14 px-3 md:py-4 py-1 h-20 md:h-auto sticky top-0  ${open ? 'shadow-none' : 'shadow-md'} md:shadow-none`}>
                {open
                    ?
                    <IoCloseCircleOutline
                        onClick={() => setOpen(false)}
                        className='md:hidden text-2xl text-primary' />
                    :
                    <BsJustifyLeft
                        onClick={() => setOpen(!open)}
                        className='md:hidden text-2xl hover:text-primary' />}
                <h1 className='md:text-4xl text-2xl font-bold text-primary'>ExpansionMart<span className='text-secondary'> Blog</span></h1>
                {/* <div className=' hidden md:flex'>
                    <input
                        type="search"
                        placeholder='Search products...'
                        className='focus:outline-none border border-r-0 border-gray w-96 px-3 rounded-l-full' />
                    <button><BsSearch className='bg-secondary text-white w-14 h-14 p-4 rounded-r-full text-xl' /></button>
                </div> */}
                <div className='flex items-center gap-5  text-center '>
                     
                        <ul className={`flex flex-col md:flex-row md:justify-end items-center md:gap-10 bg-white md:bg-none w-full md:w-auto shadow-lg md:shadow-none py-4 gap-3 z-20 md:z-auto absolute md:static transition-all duration-500 ease-in-out left-0 ${open ? 'top-20 opacity-100' : 'top-[-250px] left-0 opacity-0 md:opacity-100'}`}>
                            {
                                menus.map((menu, i) =>
                                    <li
                                        key={i} 
                                        className='text-md md:text-lg cursor-pointer hover:text-secondary transition-all ease-in duration-150 text-[20px]'>
                                            <a 
                                            target={`${menu?.m === 'Our Shop' || menu?.m === 'Policy' || menu?.m === 'Contact'|| menu?.m === 'About' ? "_blank" : ""}`} 
                                            href={menu?.link}>{menu?.m}</a>
                                            
                                            </li>)
                            }
                        </ul>
                    
                </div>

            </div>


        </header>
    );
};


export default Header;