import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import PopulerMarathons from './PopulerMarathons';
import UpCommingMarathons from './UpCommingMarathons';
import RunningPrograms from './RunningPrograms';
import SuccessStory from './SuccessStory';

const Home = () => {

   
    return (
        <div>
              
                <Banner></Banner>
                <AboutUs></AboutUs>
                <PopulerMarathons></PopulerMarathons>
                  
                    <RunningPrograms></RunningPrograms>
                {/* <UpCommingMarathons></UpCommingMarathons> */}
                <SuccessStory></SuccessStory>

        </div>
    );
};

export default Home;