import React from 'react';
import TrainingSection from './TrainingSection';
import ApplyScholarship from './ApplyScholarship';
import FAQ from './FAQ';
import SectionBanner from './SectionBanner';

const Scholarship = () => {
    return (
        <>
         <div>
            <SectionBanner />
            <TrainingSection />
            <ApplyScholarship />
            <FAQ />
         </div>
        </>
    );
};

export default Scholarship;