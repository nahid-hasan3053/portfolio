import React from 'react';
import { Link } from 'react-router-dom';

const SocialCard = ({social}) => {

    const {icon, title, bgClass} = social

    const getSocialMediaLink = (socialId) => {
        switch (socialId) {
            case 1:
                return 'https://www.tiktok.com/@user6629718374547?_t=8j3dg3wzd8a&_r=1';
            case 2:
                return 'https://www.facebook.com/tanjim.hasan.5059?mibextid=ZbWKwL';
            case 3:
                return 'https://www.instagram.com/tanjim8972?igsh=aDV2bDNkNjZyYWph';
            case 4:
                return 'https://www.youtube.com/@nahidontheway';
            default:
                return '#';
        }
    };

    return (
        <a href={getSocialMediaLink(social._id)} rel="noreferrer" target="_blank" className='hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className={`card shadow-xl ${bgClass}`}>
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl w-1/2" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 href='' className='italic font-bold hover:-translate-y-1 hover:scale-110 duration-300 hover:underline'>{title}</h1>
            </div>
        </div>
        </a>
    );
};

export default SocialCard;