import React from 'react';
import WorkCard from './WorkCard';

const Work = () => {

    const workData = [
        {
            _id: 1,
            number: '2',
            title: 'Projects',
            description: 'As a Producer'
        },
        {
            _id: '2',
            number: '30+',
            title: 'Reels',
            description: 'As a Content Creator'
        },
        {
            _id: 3,
            number: '200+',
            title: 'Photograph',
            description: 'As a Photograph'
        },
        {
            _id: 4,
            number: '25+',
            title: 'Videos',
            description: 'As a Content Creator'
        },
    ]

    return (
        <div className='grid md:grid-cols-4 mt-16 gap-6 md:bg-neutral'>
            {
                workData.map(work => <WorkCard key={work._id} work={work}></WorkCard>)
            }
        </div>
    );
};

export default Work;