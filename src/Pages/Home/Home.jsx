import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import PopulerMarathons from './PopulerMarathons';
import UpCommingMarathons from './UpCommingMarathons';
import RunningPrograms from './RunningPrograms';

const Home = () => {

   
    return (
        <div>
              
                <Banner></Banner>
                <AboutUs></AboutUs>
                <PopulerMarathons></PopulerMarathons>
                  
                    <RunningPrograms></RunningPrograms>
                <UpCommingMarathons></UpCommingMarathons>

        </div>
    );
};

export default Home;