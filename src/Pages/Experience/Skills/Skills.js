import React from 'react';
import '../Skills/Skills.css'

const Skills = () => {

    return (
        <div className='text-center mb-8'>
            <h1 className='text-5xl mt-12 font-bold'>Skills</h1>
            <p className='text-xl w-1/2 mt-4 mx-auto'>Here are some of my skills on which I have been working on for the past 2 years.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-12'>
                <div className='border p-6 box rounded-xl'>
                    <h2 className='text-3xl font-semibold my-4'>Frontend</h2> <br />
                    <div className='flex flex-wrap flex-1 gap-3 items-center justify-center'>
                        <div className="avatar border px-3 py-3 rounded">
                            <div className="w-8 rounded">
                                <img src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>React js</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>HTML</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3256505/file-type-css-icon-md.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>CSS</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>JavaScript</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://dh.library.virginia.edu/system/files/styles/large/private/bootstrap-stack.png?itok=b_S8F9nO" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Bootstrap</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://mui.com/static/logo.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Material Ui</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Tailwind CSS</p>
                        </div>
                    </div>
                </div>
                <div className='border p-6 box rounded-xl'>
                    <h2 className='text-3xl font-semibold my-4'>Backend</h2>
                    <div className='flex flex-wrap flex-1 gap-3 items-center justify-center'>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Node js</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Express Js</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://www.datocms-assets.com/48294/1680848744-rest-api-1-rest-api.png?auto=format" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Rest API</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>MongoDB</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://i.pinimg.com/originals/09/63/a6/0963a6051212c3268e25d640c0410583.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>
                <div className='border p-6 box rounded-xl '>
                    <h2 className='text-3xl font-semibold my-4'>Others</h2>
                    <div className='flex flex-wrap flex-1 gap-3 items-center justify-center'>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://t4.ftcdn.net/jpg/03/85/94/91/360_F_385949189_W1ydL4Z3c6Uy2OfB9rZNdbxVaIMOs16F.jpg" alt='' />
                            </div>
                            <p>GitHub</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBA6mpqBL1Czr24hiaWCnbMQ5s3Gw3oXTiaanrAyS8YXtB2jGJi2FRYFK7BzY4pRgoJM&usqp=CAU" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Git</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcjjucqUd1YsP3QqF62gxwg_yPL-pGnD7qeA2Tbg3ByQuzL5I21D0ivOHUHrKdkPD6IY&usqp=CAU" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Netlify</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KNT0BAck6XvNqMzqLzNt8p6tAP-BL9q89YQUTDQb8polyBNG_mZoWaKQXW0snOBYE_0&usqp=CAU" alt='' />
                            </div>
                            <p>VS code</p>
                        </div>
                        <div className="avatar border rounded px-3 py-3">
                            <div className="w-8 rounded">
                                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;