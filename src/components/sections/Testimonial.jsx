import TextBlock from '../TextBlock';
import SectionMargin from '../wrappers/SectionMargin';

export default function Testimonial() {
  return (
    <section>
      <div className='relative'>
        <SectionMargin>
          <div className='relative py-36'>
            <div className='absolute top-12 -ml-[30px] lg:-ml-[60px] z-[-1]'>
              <h2 className='text-[200px] text-[#edebfe] font-bold'>“</h2>
            </div>
            <div className='max-w-[658px] flex flex-col gap-8'>
              <TextBlock
                variant='medium'
                space='gap-8'
                heading='They’re consistent, and the communication is good.'
                description='When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers.'
              />
              <div className='flex gap-4'>
                <picture>
                  <img
                    className='w-[68px]'
                    src='/assets/images/GarinProfile.webp'
                    alt=''
                  />
                </picture>
                <TextBlock
                  heading='Garin Toren,'
                  description='CEO, ping'
                  variant='avatar-tiny'
                />
              </div>
              <div className='flex flex-col justify-between gap-8 mt-4'>
                <div className='flex gap-14'>
                  <picture>
                    <img
                      className='w-[48px]'
                      src='/assets/images/left_blue_arrow.png'
                      alt='left blue arrow'
                    />
                  </picture>
                  <picture>
                    <img
                      className='w-[48px]'
                      src='/assets/images/right_blue_arrow.png'
                      alt='left blue arrow'
                    />
                  </picture>
                </div>
                <a className='right-0 font-bold underline uppercase text-primary_blue lg:absolute underline-offset-8'>
                  View case study
                </a>
              </div>
            </div>
          </div>
        </SectionMargin>
      </div>
    </section>
  );
}
