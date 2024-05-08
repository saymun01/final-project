import React from 'react';
import MobileIcon from '../../assets/mobile-icon.png';
import pcIcon from '../../assets/pc-icon.png';
import carIcon from '../../assets/car-icon.png';
import homeIcon from '../../assets/Home-icon.png';
import locationIcon from '../../assets/location-icon.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='bg-white px-52'>
                <div className='flex justify-between py-16'>
                    <h1 className='font-semibold text-black text-lg'>Browse items by category</h1>

                    <div className='flex'>
                        <img className='w-5' src={locationIcon} /> <h2 className='font-semibold text-black text-lg'>All of Bangladesh</h2>
                    </div>
                </div>
                <div className='flex gap-40'>
                    <div>
                        <Link to="/mobileProducts">
                            <div className='flex pl-5'>
                                <div className='mr-3'>
                                    <img className='w-10 h-14' src={MobileIcon} />
                                </div>

                                <div>
                                    <h1 className='text-black'>Mobiles</h1>
                                    <h2>10 items</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/*  */}
                    <div>
                        <a href="#">
                            <div className='flex pl-5'>
                                <div className='mr-3'>
                                    <img className='w-12 h-12' src={pcIcon} />
                                </div>

                                <div>
                                    <h1 className='text-black'>Electronics</h1>
                                    <h2>0 items</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div>
                        <a href="#">
                            <div className='flex pl-5'>
                                <div className='mr-3'>
                                    <img className='w-10 h-12' src={carIcon} />
                                </div>

                                <div>
                                    <h1 className='text-black'>Vehicles</h1>
                                    <h2>0 items</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div>
                        <a href="#">
                            <div className='flex pl-5'>
                                <div className='mr-3'>
                                    <img className='w-12 h-14' src={homeIcon} />
                                </div>

                                <div>
                                    <h1 className='text-black'>Propetry</h1>
                                    <h2>0 items</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='mt-40'>
                    <h1 className='text-xl text-slate-500 font-semibold'>About Tazza, The Largest Marketplace in Bangladesh!</h1>
                    <p className='text-slate-400 mt-4'>Tazza is a platform on which you can buy and sell almost everything! We help people buy and sell vehicles, find properties, buy and sell mobile phones, purchase electronic products, and much more. With more than 10 categories our solutions are built to be safe, smart, and convenient for our customers.</p>
                </div>

                <div className='mt-10'>
                    <h1 className='text-xl text-slate-500 font-semibold'>Buy, Sell, Rent in Bangladesh</h1>
                    <p className='text-slate-400 mt-4'>Every month, hundreds of millions of people use Tazza to find and sell mobiles, musical instruments, cars, houses, and more through classified ads. To sell new items or sell used items quickly, Tazza offers Ad Promotion features.
                    </p>

                    <p className='mt-4'>Tazza has an extensive collection of new and used goods, making it easier for users to quickly buy new items or buy used items at their desired location. To buy online, users easily can reach their desired products through filtering options.</p>

                    <p className='mt-4 pb-20'>For businesses, Tazza has introduced the ‘Membership’ service, which helps them expand their businesses online. Members will have their virtual shop with a Tazza URL with free promotions of their goods. With different membership categories, businesses can flourish as verified members and authorized dealers.</p>
                </div>

            </div>

            {/* footer */}
            <div>
                <footer className="footer p-10 bg-gray-300 text-black px-52">
                    <nav>
                        <h6 className="footer-title">More from Tazza</h6>
                        <a className="link link-hover">Sell Fast</a>
                        <a className="link link-hover">Membership</a>
                        <a className="link link-hover">Banner Ads</a>
                        <a className="link link-hover">Ad Promotions</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Help & Support</h6>
                        <a className="link link-hover">FAQ</a>
                        <a className="link link-hover">Stay safe</a>
                        <a className="link link-hover">Contact Us</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">About Tazza</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Terms and Conditions</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Sitemap</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Blog & Guides</h6>
                        <a className="link link-hover">CarsGuide</a>
                        <a className="link link-hover">BikesGuide</a>
                        <a className="link link-hover">PropertyGuide</a>
                        <a className="link link-hover">Official Blog</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Home;