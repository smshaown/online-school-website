import React from 'react';


const HeaderSection = ({image, title, description}) => {
    return (
        <div className='z-10 mt-[-76px]' style={{background: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className='flex h-[100vh] items-center justify-center px-6' style={{backgroundColor: "rgba(0, 0, 0, 0.40)"}}>
                <div className='myContainer'>
                    <div className="mx-auto max-w-2xl space-y-4 text-center text-white">
                        <h1 className='text-[32px] font-bold md:text-[42px] lg:text-[72px]'>
                            {title}
                        </h1>
                        <p className='text-md leading-normal md:text-lg'>
                             {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;


