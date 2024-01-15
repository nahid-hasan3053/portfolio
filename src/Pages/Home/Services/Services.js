import React from 'react';
import video from '../../../assets/icon/video.png'
import camera from '../../../assets/icon/camera.webp'
import collaboration from '../../../assets/icon/collaboration.jpg'
import ServiceCard from './ServiceCard';
import background from '../../../assets/bacground/black-bg.png'
import { Link } from 'react-router-dom';

const Services = () => {

    const serviceData = [
        {
            _id: 1,
            icon: video,
            title: 'Product videography'
        },
        {
            _id: 2,
            icon: camera,
            title: 'Product photgraphy'
        },
        {
            _id: 3,
            icon: collaboration,
            title: 'Brand collaboration'
        },
    ]

    return (
        <div className='mt-20 py-4'
            style={{
                background: `url(${background})`,
                // backgroundSize: 'cover'
            }}
        >
            <h1 className='text-6xl font-bold font-sans text-center text-white mt-2'>SERVICES</h1>
            <div className='grid md:grid-cols-3 mt-10'>
                {
                    serviceData.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <h1 className='text-center text-xl mt-6 bg-primay text-white mb-2'>Please email at <Link className='text-red-600 font-bold'>nh5477715@gmail.com</Link> for contacting me</h1>
        </div>
    );
};

export default Services;