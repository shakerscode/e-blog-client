import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// // Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";


// // import required modules
import { FreeMode, Autoplay } from "swiper";
import { FiArrowRight } from "react-icons/fi";


const Blogs = ({blogs}) => {
    
    return (
        <div className=" my-10">
            <div className='flex justify-between items-center bg-light p-3 rounded-lg'>
                <h3 className='text-primary md:text-3xl text-xl font-bold py-1'>Featured Blog</h3>

                <span className='flex items-center gap-2 md:text-lg text-sm text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 3,
                    },
                }}
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                modules={[FreeMode, Autoplay]}
                className=""
            >
                {
                    blogs?.map((blog, i) => <SwiperSlide key={i} className='p-4 cursor-pointer'>
                        <img src={blog?.image} alt="" className=" rounded-lg w-full h-56" />
                        <div className="mt-3">
                            <p className="text-sm md:text-md font-semibold">{blog?.date}</p>
                            <h1 className="text-lg md:text-xl font-bold text-primary">{blog.title}</h1>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Blogs;