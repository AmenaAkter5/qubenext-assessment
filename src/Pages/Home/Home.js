import React from 'react';
import './Home.css';
import PlayButton from '../../components/PlayButton/PlayButton';
import Reviews from '../../components/Reviews/Reviews';
import MainReviews from '../../components/MainReviews/MainReviews';

const Home = () => {
    return (
        <main className='main'>
            <div className='wrapper'>
                <section className='btn-section'>
                    <PlayButton />
                    <Reviews />
                </section>
                <MainReviews />
            </div>
        </main>
    );
};

export default Home;