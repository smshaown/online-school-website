import React from 'react';
import SuccessBanner from './SuccessBanner';
import SuccessProject from './SuccessProject';
import SuccessStory from './SuccessStory';
import SubmitYourStory from './SubmitYourStory';

const SuccessPage = () => {
    return (
        <>
          <SuccessBanner />
          <SuccessProject />
          <SuccessStory />
          <SubmitYourStory />   
        </>
    );
};

export default SuccessPage;