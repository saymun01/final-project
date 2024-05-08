import React from 'react';
import Logo from '../../assets/logo.png'
import user from '../../assets/user-icon.png'

const Home = () => {
    return (
        <div>
            <div className="navbar bg-[#990000]">
                <div className="flex-1 ml-52 pb-3">
                    <a className="btn btn-ghost text-xl"><img src={Logo} alt="" /></a>
                </div>

                <a href="#">
                    <div className="flex mr-52">
                        <div>
                            <img className='w-8 h-8 mt-2' src={user} alt="" />
                        </div>

                        <div className='mt-2'>
                            <h2 className='text-white'>Login</h2>
                        </div>
                    </div>
                </a>


            </div>
        </div>
    );
};

export default Home;