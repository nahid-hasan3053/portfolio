import React from 'react';
import tictok from '../../../assets/social/tictok.png'
import facebook from '../../../assets/social/facebook.png'
import instagram from '../../../assets/social/instagram.png'
import youtube from '../../../assets/social/youtube.png'
import SocialCard from './SocialCard';

const Social = () => {

    const socialData = [
        {
            _id: 1,
            icon: tictok,
            title: 'Find me on tictok >'
        },
        {
            _id: 2,
            icon: facebook,
            title: 'Find me on facebook >'
        },
        {
            _id: 3,
            icon: instagram,
            title: 'Find me on instagram >'
        },
        {
            _id: 4,
            icon: youtube,
            title: 'Find me on youtube >'
        },
    ]

    return (
        <div className='mt-20'>
            <h1 className='text-6xl font-bold mb-6 text-center font-sans'>FIND ME ON SOCIAL</h1>
            <div className="divider"></div> 
            <div className='grid md:grid-cols-4 gap-6 px-4 mt-16'>
                {
                    socialData.map(social => <SocialCard key={social._id} social={social}></SocialCard>)
                }
            </div>
        </div>
    );
};

export default Social;