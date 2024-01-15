import React from 'react';
import nahid from '../../../assets/nahid.jpg'

const About = () => {
    return (
        <div className="hero mt-20 w-full bg-gradient-to-r from-accent to-neutral p-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='nahid' src={nahid} className="md:h-[400px] rounded-sm" />
                <div className='md:w-1/2 text-white'>
                    <h1 className="text-5xl font-bold">About me!</h1>
                    <p className="py-6 text-justify me-4">In 2019, a freshman in college who was fascinated by the institute's festivities, picked up a camera and started documenting everything that he found amusing. This hobby evolved into a passion, and he later explored the amazing field of filmmaking. Fast forward to today, he is trying to make a living out of the thing he loves. That's me!</p>
                    <button className="btn bg-primary border-none text-white">Read more...</button>
                </div>
            </div>
        </div>
    );
};

export default About;