import React from 'react';

const ServiceCard = ({service}) => {

    const {icon, title} = service

    return (
        <div className="card">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl w-2/5" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">{title}</h2>
            </div>
        </div>
    );
};

export default ServiceCard;