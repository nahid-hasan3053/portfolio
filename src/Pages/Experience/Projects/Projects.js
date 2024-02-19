import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-20'>Projects</h1>
            <p className='text-center mt-3 w-1/2 text-xl mx-auto'>I have worked on a wide range of projects. Here are some of my projects.</p>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className='flex flex-wrap gap-2 mt-2 ms-2'>
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Fashion</div> 
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;