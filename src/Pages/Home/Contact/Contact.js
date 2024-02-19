import React from 'react';
import background from '../../../assets/bacground/black-bg.png'
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleSubmitForm = data =>{
        console.log(data);

    }

    return (
        <div className='py-4' style={{
            background: `url(${background})`,
            backgroundPosition: 'left',
            backgroundSize: 'cover'
        }}>
            <div className='text-center mt-11'>
                <h1 className='text-6xl text-white font-bold'>Get in Touch!</h1>
                <p className='text-white mt-3 font-bold'>Please email at <span className='text-red-600'>nh5477715@gmail.com</span> for any business queries!</p>
            </div>
            <form onSubmit={handleSubmit(handleSubmitForm)} className='grid grid-cols-1 px-3 md:w-1/2 mx-auto gap-2 pb-7'>
                <label className="form-control ">
                    <div className="label"><span className="label-text text-white text-sm font-bold">Name*</span></div>
                    <input {...register('name', {required: 'Name is required'})} name='name' type="text" placeholder="Enter your name" className="input w-full rounded-none" />
                    {errors.name && <p className='text-red-600 text-sm mt-2'>{errors.name.message}</p>}
                </label>
                <label className="form-control">
                    <div className="label"><span className="label-text text-white text-sm font-bold">Email*</span></div>
                    <input {...register('email', {required: 'Email is required'})} name='email' type="text" placeholder="Enter your email" className="input w-full rounded-none" />
                    {errors.email && <p className='text-red-600 text-sm mt-2'>{errors.email.message}</p>}
                </label>
                <label className="form-control">
                    <div className="label"><span className="label-text text-white text-sm font-bold">Subject*</span></div>
                    <input {...register('subject', {required: 'Subject is required'})} name='subject' type="text" placeholder="Enter your subject" className="input w-full rounded-none" />
                    {errors.subject && <p className='text-red-600 text-sm mt-2'>{errors.subject.message}</p>}
                </label>
                <label className="form-control">
                    <div className="label"><span className="label-text text-white text-sm font-bold">Message*</span></div>
                    <textarea {...register('message', {required: 'Message is required'})} name='message' placeholder='Enter your message' className="textarea textarea-bordered w-full rounded-none " cols="30" rows="2"></textarea>
                    {errors.message && <p className='text-red-600 text-sm mt-2'>{errors.message.message}</p>}
                </label>
                <input type="submit" className='w-full mt-4 btn btn-outline btn-secondary' />
            </form>
        </div>
    );
};

export default Contact;