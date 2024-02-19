import React from 'react';
import learning from '../../../assets/projects/learning.png'
import cake from '../../../assets/projects/cake-shop.png'
import travel from '../../../assets/projects/travel.png'
import academy from '../../../assets/projects/academy.png'
import portfolio from '../../../assets/projects/portfolio.png'
import portal from '../../../assets/projects/portal.png'
import Project from './Project';

const Projects = () => {

    const projects = [
        {
            _id: 1,
            image: cake,
            technology_1: 'React Js',
            technology_2: 'Javascript',
            technology_3: 'Tailwind CSS',
            technology_4: 'Firebase',
            technology_5: 'Daisy UI',
            title: 'Cake purchasing site',
            date: 'September-2023 - October-2023'
        },
        {
            _id: 2,
            image: travel,
            technology_1: 'React Js',
            technology_2: 'Javascript',
            technology_3: 'Tailwind CSS',
            technology_4: 'Firebase',
            title: 'Travel booking site',
            date: 'September-2023 - October-2023',
            live : 'https://your-travel-destination-3f5aa.web.app/',
            code: 'https://github.com/nahid-hasan3053/your-next-travel-destination'
        },
        {
            _id: 3,
            image: academy,
            technology_1: 'React Js',
            technology_2: 'Javascript',
            technology_3: 'Tailwind CSS',
            technology_4: 'Bootstrap',
            title: 'Brain storming site',
            date: 'September-2023 - October-2023',
            live : 'https://flourishing-kelpie-1b2c1f.netlify.app/',
            code : 'https://github.com/programming-hero-web-course2/b6-quiz-crackerz-Nahidontheway'
        },
        {
            _id: 4,
            image: learning,
            technology_1: 'React Js',
            technology_2: 'Javascript',
            technology_3: 'Bootstrap',
            technology_4: 'CSS',
            title: 'Learning site',
            date: 'September-2023 - October-2023',
            live: 'https://flourishing-kelpie-1b2c1f.netlify.app/',
            code : 'https://github.com/programming-hero-web-course2/b6-quiz-crackerz-Nahidontheway'
        },
        {
            _id: 5,
            image: portfolio,
            technology_1: 'React Js',
            technology_2: 'Javascript',
            technology_3: 'Tailwind CSS',
            technology_4: 'CSS',
            title: 'Personal portfolio site',
            date: 'September-2023 - October-2023',
            live: 'https://personal-portfolio-b4163.web.app',
            code : 'https://github.com/nahid-hasan3053/portfolio'
        },
        {
            _id: 6,
            image: portal,
            technology_1: 'React Js',
            technology_2: 'Javascript',
            technology_3: 'Tailwind CSS',
            technology_4: 'Daisy UI',
            title: 'Doctors portal site',
            date: 'September-2023 - October-2023',
            live: 'https://doctors-portal-return.web.app/appointment',
            code : 'https://github.com/nahid-hasan3053/portfolio'
        },
    ]

    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-20'>Projects</h1>
            <p className='text-center mt-3 w-1/2 text-xl mx-auto'>I have worked on a wide range of projects. Here are some of my projects.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-8 mt-14 items-center justify-center'>
                {
                    projects.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;