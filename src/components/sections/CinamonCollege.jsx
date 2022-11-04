import React from 'react';
import Button from '../Button';
import SectionMargin from '../wrappers/SectionMargin';

export default function CinamonCollege() {
  return (
    <section>
      <div className='relative'>
        <SectionMargin>
          <div className='flex flex-col lg:flex-row lg:items-end gap-[50px] lg:gap-[150px] py-24 lg:py-36'>
            <picture>
              <img
                className='max-w-[280px] lg:max-w-[390px]'
                src='/assets/images/cinnamon_college.png'
                alt='Cinamon college'
              />
            </picture>
            <div className='hidden lg:block lg:absolute lg:bottom-0 lg:right-0 '>
              <picture>
                <img
                  className='w-[50%] ml-0 lg:ml-auto '
                  src='/assets/images/cinammo_college_proffesional.png'
                  alt='agile team'
                />
              </picture>
            </div>
            <div className='max-w-[352px]'>
              <p>
                Seize the unique opportunity to participate in a wide range of
                courses conducted by professionals with an impeccable reputation
                in the digital industry.
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
