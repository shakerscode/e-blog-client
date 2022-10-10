import React from 'react';
import { Banner, BlogTop, BlogMain, Ads } from '../exporter';
import blog from '../../assets/Banner/banner-6.png' 
import bannerAdsOne from '../../assets/Ads/bannerAds-1.png'
import bannerAdsTwo from '../../assets/Ads/bannerAds-2.png'
import Blogs from './Blogs';

const Blog = () => {
    const blogs = [
        { title: 'Healthy food pyramid chart', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-vector/healthy-food-pyramid-chart_1308-50311.jpg' },
        { title: 'Cook healthy food for yourself', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/healthy-hearty-salad-tuna-green-beans-tomatoes-eggs-potatoes-black-olives-close-up-bowl-table_2829-4485.jpg' },
        { title: 'Always eat green vegetables', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg' },
        { title: 'Healthy breakfast proper nutrition top view flat', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/concept-healthy-food-sports-lifestyle-vegetarian-lunch-healthy-breakfast-proper-nutrition-top-view-flat-lay_2829-6082.jpg' },
        { title: 'Healthy food medical equipment', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/healthy-food-medical-equipment_23-2148108966.jpg' },
        { title: 'Paper bag full delicious organic food diet menu', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-psd/paper-bag-full-delicious-organic-food-diet-menu_23-2148322495.jpg' },
        { title: 'Happy smiling athletic woman with arms outstretched', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/happy-smiling-athletic-woman-with-arms-outstretched_1150-4184.jpg' },
        { title: 'Girl granola honey blue white natural', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/girl-granola-honey-blue-white-natural_1428-679.jpg' },
        { title: 'Happy family having fun field sunset', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/happy-family-having-fun-field-sunset_1303-22471.jpg' },

    ]
    return (
        <section className='md:px-14 px-4'> 
            <BlogTop/>
            <Ads url={bannerAdsTwo}/>
            <Blogs blogs={blogs}/>
            <Ads url={bannerAdsOne}/>
            <BlogMain/> 
        </section>
    );
};

export default Blog;