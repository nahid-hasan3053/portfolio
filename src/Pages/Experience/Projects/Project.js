import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {

    const { image, technology_1, technology_2, technology_3, technology_4, title, date, live, code} = project

    return (
        <div>
            <div className="card shadow-xl transition duration-300 ease-in-out hover:scale-110">
            <figure><img src={image} alt="Shoes" /></figure>
                <div className='flex flex-wrap gap-2 mt-2 ms-2'>
                    <div className="badge badge-outline">{technology_1}</div>
                    <div className="badge badge-outline">{technology_2}</div>
                    <div className="badge badge-outline">{technology_3}</div>
                    <div className="badge badge-outline">{technology_4}</div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-xs mb-2'>{date}</p>
                    <Link to={code} className='btn btn-outline'>View Code</Link>
                    <Link to={live} className='btn btn-outline'>View Live App</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;