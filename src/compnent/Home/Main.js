import React from 'react';

const Main = () => {
    return (
        <div className="hero pt-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <p className='font-serif'>WELCOME TO MY WORLD</p>
                    <p>a Developer</p>
                    <h1 className="text-5xl font-bold">Hi, I’m <span className='text-red-500'>Jone Lee</span></h1>
                    <p className="py-6">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                    <div>
                        <div>
                            <p>FIND WITH ME</p>
                            <div className='w-12 h-11 bg-red-200 flex rounded-md shadow-2xl	 hover:bg-red-300 transition duration-700 ease-in-out hover:translate-y-1'>
                                <a href='' className='my-auto  mx-auto'>F</a>

                            </div>
                        </div>
                        <p>BEST SKILL ON</p>
                        <div>
                            <button className='btn '>F</button>
                            <a href="#" className="btn">in</a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;