import React from 'react';
import BgImg from '../bg.jpg';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <header>
                <div>
                    <img src={BgImg} className='cover-img' alt='Nike Background' />
                    <h3>Just Do It</h3>
                    <h3>See the Latest Arrival</h3>
                    <Link className='btn' to='/product'>Visit My Store</Link>
                </div>
            </header>
        </div>
    )
}

export default Home