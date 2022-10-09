import React from 'react';
import Products from '../../assets/icons/products.png';
import Delivery from '../../assets/icons/shipped.png';
import Discounts from '../../assets/icons/discount.png';
import Price from '../../assets/icons/best-price.png';
import PlayStore from '../../assets/icons/playstore-svg.png';
import AppStore from '../../assets/icons/appstore-svg.png';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi'
import { FaFacebookF, FaCcVisa, FaCcStripe, FaCcMastercard } from 'react-icons/fa'
import { BsTwitter, BsInstagram, BsPinterest, BsPaypal } from 'react-icons/bs'
import { SiAmericanexpress } from 'react-icons/si'


const Footer = () => {
    const itemsInFooter = [
        { tittle: 'Every Fresh Products', image: Products },
        { tittle: 'Free Delivery For Order Over $50', image: Delivery },
        { tittle: 'Daily Mega ', image: Discounts },
        { tittle: 'Best Price On The Marke', image: Price },
    ]
    const linksInFooter = [
        {
            tittle: "Categories", links: [
                'Vegetables & Fruit',
                'Beverages',
                'Meats & Seafood',
                'Frozen Foods',
                'Biscuits & Snacks',
                'Grocery & Staples',
            ]
        },
        {
            tittle: "Useful Links", links: [
                'Home',
                'Shop',
                'About Us',
                'Blog',
                'Contact Us',
            ]
        },
        {
            tittle: "Help Center", links: [
                'Your Order',
                'Your Account',
                'Track Order',
                'Your Wishlist',
                'Search',
                'FAQ',
            ]
        },
    ]



    return (
        <footer className='bg-light h-fit-content md:px-14 px-3'>
            <div className='grid md:grid-cols-2 gap-5 mx-auto py-8 border-b border-dashed border-gray'>
                {
                    itemsInFooter?.map((I, i) =>
                        <div
                            className='flex justify-start items-center gap-4'
                            key={i}>
                            <img src={I.image} alt="" className='p-2 rounded-full border border-secondary w-10' />
                            <p className=''>{I.tittle}</p>
                        </div>
                    )
                }

            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-3 border-b border-dashed border-gray py-10'>
                <div>
                    <h1 className='md:text-4xl text-2xl font-bold text-primary'>Expansion<span className='text-secondary'>Mart</span></h1>
                    <p className='py-5'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.</p>
                    <button className='flex justify-center items-center gap-1 hover:text-primary transition-all duration-500 ease-in-out'>
                        <AiOutlineHome />
                        <p className='text-[13px]'>1418 Riverwood Drive, CA 96052, US</p>
                    </button>
                    <button className='flex items-center gap-1 hover:text-primary transition-all duration-500 ease-in-out'>
                        <AiOutlineMail />
                        <p className='text-sm'>support@expansionmart.com</p>
                    </button>
                </div>
                {
                    linksInFooter?.map((lF, i) =>
                        <div key={i} className=' md:mx-auto  '>
                            <h2 className='text-xl font-semibold'>{lF.tittle}</h2>
                            <ul className='flex flex-col  gap-2 mt-2'>
                                {
                                    lF.links.map((link, i) => <li className='hover:text-primary text-sm md:text-md hover:border-b-primary transition-all duration-500 ease-in-out ' key={i}><a href="/">{link}</a></li>)
                                }
                            </ul>
                        </div>
                    )
                }
                <div className='flex flex-col gap-3'>
                    <h4 className='text-xl font-semibold'>Contact Us</h4>
                    <div className='border-b border-dashed border-gray'>
                        <div className='flex items-center gap-2'>
                            <FiPhoneCall /> <span>Hotline 24/7:</span>
                        </div>
                        <p className='text-lg font-semibold py-4'>01766339710</p>
                    </div>
                    <div className='border-b border-dashed border-gray'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineMail /> <span>Email Address:</span>
                        </div>
                        <p className='text-lg font-semibold py-4'>expansionmart@hotmail.com</p>
                    </div>
                    <p>Download App:</p>
                    <div className='flex items-center gap-2'>
                        <a target={'_blank'} rel="noreferrer" href="https://www.apple.com/store"><img src={PlayStore} alt="" /></a>
                        <a target={'_blank'} rel="noreferrer" href="https://play.google.com/store"><img src={AppStore} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className='py-8 flex md:flex-row flex-col-reverse gap-3 justify-between items-center'>
                <div>
                    <p> &copy;{new Date().getFullYear()} <span className='font-semibold text-primary text-sm'>Expansion<span className='text-secondary'>Mart</span></span> All rights reserved</p>
                </div>
                <div className='flex gap-5 text-2xl'>
                    <BsPaypal className='hover:text-secondary cursor-pointer' />
                    <FaCcVisa className='hover:text-secondary cursor-pointer' />
                    <FaCcMastercard className='hover:text-secondary cursor-pointer' />
                    <FaCcStripe className='hover:text-secondary cursor-pointer' />
                </div>
                <div className='flex gap-5'>
                    <a className='hover:text-secondary' target={'_blank'} href="https://www.facebook.com/" rel="noreferrer"><FaFacebookF /></a>
                    <a className='hover:text-secondary' target={'_blank'} href="https://www.twitter.com" rel="noreferrer"><BsTwitter /></a>
                    <a className='hover:text-secondary' target={'_blank'} href="https://www.instagram.com" rel="noreferrer"><BsInstagram /></a>
                    <a className='hover:text-secondary' target={'_blank'} href="https://www.pinterest.com" rel="noreferrer"><BsPinterest /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;