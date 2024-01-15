import React from 'react';
import client from '../../../assets/nafiulBhai.jpg'
import client1 from '../../../assets/client/jillurbhai.jpg'
import background from '../../../assets/background.jpg'
import ClientCard from './ClientCard';

const Client = () => {

    const clientData = [
        {
            _id: 1,
            img: client,
            name: 'Nafiul Adnan Chowdhury',
            title: 'Software Engineer at Google',
            description: 'Hey thanks a lot for the hard work! I surely hope to work in the future too. And good luck for your study and career!',
        },
        {
            _id: 2,
            img: client1,
            name: 'Md Jillur Rahman',
            title: 'Politician',
            description: 'You are doing great job keep doing this all my support and love is always for you. keep doing more better work for us!',
        }
    ]

    return (
        <div className='p-8'
            style={{
                background: `url(${background})`,
                backgroundSize: 'cover'
            }}
        >
            <div className='text-center mt-6 mb-16'>
                <h1 className='text-6xl font-bold text-neutral'>Individuals I've worked with</h1>
                <p className='text-xl mt-4'>Let's hear it from them!</p>
            </div>
            <div className='grid grid-cols-1 gap-6'>
                {
                    clientData.map(client => <ClientCard key={client._id} client={client}></ClientCard>)
                }
            </div>
        </div>
    );
};

export default Client;