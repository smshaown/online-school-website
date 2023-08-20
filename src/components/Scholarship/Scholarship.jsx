import React from 'react';
import TrainingSection from './TrainingSection';
import ApplyScholarship from './ApplyScholarship';
import SectionBanner from './SectionBanner';
import FAQ from './FAQ';

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