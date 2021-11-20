import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import FreshRecomendation from '../Components/FreshRecomendation/FreshRecomendation';


function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <FreshRecomendation/>
      <Footer />
    </div>
  );
}

export default Home;
 
