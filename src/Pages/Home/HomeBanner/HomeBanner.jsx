import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner01 from "../../../assets/HomeBanner/banner_01.jpg"
import banner02 from "../../../assets/HomeBanner/banner_02.jpg"
import banner03 from "../../../assets/HomeBanner/banner_03.jpg"

const HomeBanner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner03} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-1/3 lg:left-72 md:left-40 left-24'>
                    <h2 className='text-9xl font-arizonia mb-4'>Let's</h2>
                    <h1 className='text-9xl font-serif tracking-widest'>Dance</h1>
                    <p className='text-3xl tracking-widest mt-3 font-serif'>Dance Creates a culture of optimism, <br /> the culture of cheerfulness</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner01} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-1/3 lg:left-72 md:left-40 left-24 text-gray-300'>
                    <h2 className='text-9xl font-arizonia mb-4 '>Let's</h2>
                    <h1 className='text-9xl font-serif tracking-widest'>Dance</h1>
                    <p className='text-3xl tracking-widest mt-3 font-serif'>Dance Creates a culture of optimism, <br /> the culture of cheerfulness</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner02} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner01} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;