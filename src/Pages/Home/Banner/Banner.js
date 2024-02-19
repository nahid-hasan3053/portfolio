import React from 'react';
import bg from '../../../assets/bg.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero h-[550px] mt-2 max-w-full"
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">NAHID</h1>
                        <h1 className="mb-5 text-5xl font-bold italic">CREATIVE CREATOR</h1>
                        <h1 className="mb-5 text-5xl font-bold">DHAKA 2024</h1>
                        <Link to='/experience' className='btn btn-primary'>Let's explore</Link>
                    </div>
                </div>
        </div>
    );
};

export default Banner;