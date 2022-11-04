import React from 'react';
import Button from '../Button';
import TextBlock from '../TextBlock';
import SectionMargin from '../wrappers/SectionMargin';

export default function WhoAreWe() {
  const internationalTeams = [
    'Product design',
    'Project management',
    'Web development',
    'Human resources',
    'Mobile development',
    'Sales',
    'Quality assurance',
    'Fluffy friends',
    'Marketing',
  ];

  return (
    <section>
      <div className='bg-[#f6f7f7] relative'>
        <SectionMargin>
          <div className='py-24 lg:py-52'>
            <div className='flex flex-col gap-10 lg:gap-14'>
              <div className='max-w-[448px] relative '>
                <TextBlock
                  heading='Who we are'
                  variant='medium'
                  space='gap-8'
                  description='Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries.'
                />
              </div>
              <div className='hidden lg:grid grid-cols-2 max-w-[784px] gap-y-8'>
                {internationalTeams.map((teamName, index) => (
                  <h3 className='text-xl font-bold' key={index}>
                    {teamName}
                  </h3>
                ))}
              </div>
              <div className='right-0 lg:absolute lg:-mt-16'>
                <picture>
                  <img
                    className='w-[80%] lg:w-full'
                    src='/assets/images/who-we-are.webp'
                    alt=''
                  />
                </picture>
              </div>
              <div className=''>
                <Button>Read about us</Button>
              </div>
            </div>
          </div>
        </SectionMargin>
      </div>
    </section>
  );
}
