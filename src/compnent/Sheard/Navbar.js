import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar  items-start bg-blue-50  ">
            <div className=" navbar-start my-auto p-4">              
                <div className="dropdown dropdown-start ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-14 h-12 rounded-full">
                            <img  src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <h2 className='text-2xl font-semibold pl-2'> Rabiul</h2>
            </div>

            <div className="navbar-center ">
                <ul className='flex text-base-400 '>
                    <li className='mr-5  hover:text-red-400' >Home</li>
                    <li className='mr-5  hover:text-red-400'>Profile</li>
                    <li className='mr-5  hover:text-red-400'>About</li>
                </ul>

            </div>
            <div className="navbar-end my-auto p-4">
            
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            <div>
                <button className='w-24 bg-base-100 h-10 rounded-lg shadow-xl mx-2 text-red-500 font-semibold' >Buy Now</button>
            </div>
              
            </div>
            
        </div>
    );
};

export default Navbar;