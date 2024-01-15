import React from 'react';
import client from '../../../assets/nafiulBhai.jpg'
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
            <div>
                {
                    clientData.map(client => <ClientCard key={client._id} client={client}></ClientCard>)
                }
            </div>
        </div>
    );
};

export default Client;