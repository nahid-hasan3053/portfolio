import React from 'react';

const ClientCard = ({client}) => {

    const {img, title, description, name} =client

    return (
        <div className="card card-side md:h-[350px] shadow-xl md:w-1/2 mx-auto rounded-none pb-4">
            <figure><img src={img} className='md:w-[500px]' alt="Movie"/></figure>
            <div className="card-body md:w-full">
                <h2 className="card-title">{name}</h2>
                <p className='text-neutral'>{title}</p>
                <p className='md:-mt-16'>{description}</p>
            </div>
        </div>
    );
};

export default ClientCard;