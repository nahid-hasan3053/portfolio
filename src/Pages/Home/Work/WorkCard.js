import React from 'react';

const WorkCard = ({work}) => {

    const {number, title, description} = work

    return (
        <div className="card bg-neutral text-white shadow-xl border-r-4 rounded-none">
            <div className="card-body">
                <h2 className="card-title text-6xl font-serif font-bold">
                {number}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <h1 className='text-4xl font-semibold italic'>{title}</h1>
                <h1>{description}</h1>
            </div>
        </div>
    );
};

export default WorkCard;