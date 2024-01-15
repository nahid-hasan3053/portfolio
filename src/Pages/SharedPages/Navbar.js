import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-primary to-secondary md:rounded mt-4 text-white">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-xl">Nahid Hasan</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <details>
                    <summary>
                        Explore More
                    </summary>
                    <ul className="p-2 bg-base-100 text-black font-semibold rounded-t-none rounded-b-lg">
                        <li><Link to='/experience'>Experience</Link></li>
                        <li><Link>Travel</Link></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;