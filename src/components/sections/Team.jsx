import React from 'react';
import Button from '../Button';
import SectionMargin from '../wrappers/SectionMargin';

export default function Team() {
  return (
    <section>
      <div className='bg-[#f6f7f7] relative'>
        <SectionMargin>
          <div className='flex flex-col lg:flex-row gap-[50px] lg:gap-[150px] py-24 lg:py-36'>
            <h3 className='text-[40px] lg:text-[54px] leading-[52px] lg:leading-[72px] max-w-[280px] lg:max-w-[390px] font-bold'>
              Agile team on demand
            </h3>
            <div className='lg:absolute lg:bottom-0 lg:right-0'>
              <picture>
                <img
                  className='w-[80%] ml-0 lg:ml-auto '
                  src='/assets/images/agile_team.png'
                  alt='agile team'
                />
              </picture>
            </div>
            <div className='max-w-[352px]'>
              <p>
                By hiring and managing talented people with skills specific to
                your project, we build you a team that’s accomplished, agile and
                scalable in both directions.
              </p>
              <div className='mt-8'>
                <Button>See how it works</Button>
              </div>
            </div>
          </div>
        </SectionMargin>
      </div>
    </section>
  );
}
