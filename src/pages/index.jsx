import Head from 'next/head';
import products from '../data/products';
import servicesData from '../data/services';
import Button from './components/Button';
import IconCard from './components/IconCard';
import ProductShowcase from './components/ProductShowcase';
import TextBlock from './components/TextBlock';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Cinamon clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className='bg-black bg-opacity-90 relative'>
          <div className='bg-hero_noise absolute h-full w-full z-[-1]'></div>
          <div className='max-w-[1168px] mx-auto px-6 pt-20 lg:pt-48 pb-28 lg:pb-44'>
            <TextBlock
              variant='bigger'
              space='gap-[20px]'
              textShade='light'
              heading='Results focused design &
development agency.'
              description='Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, well get your product off the ground and build a momentum for your success.'
            />
          </div>
        </section>
        <section className='my-20 lg:my-36'>
          <div className='max-w-[1168px] mx-auto px-6 flex flex-col gap-16 lg:gap-40'>
            {products.map((product, index) => (
              <ProductShowcase {...product} key={index} />
            ))}
          </div>
        </section>
        <section className='bg-black bg-opacity-90 relative'>
          <div className='bg-hero_noise absolute h-full w-full z-[-1]'></div>
          <div className='max-w-[1168px] mx-auto px-6 py-20 flex  flex-col lg:flex-row items-start gap-28'>
            <h2 className='text-white text-[40px] lg:text-[54px] leading-[72px] font-bold'>
              Our services
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-content-stretch flex-1 gap-y-24'>
              {servicesData.map((service, index) => (
                <IconCard {...service} key={index} />
              ))}
            </div>
          </div>
        </section>
        <section className='bg-[#f6f7f7] relative'>
          <div className='max-w-[1168px] mx-auto px-6 flex flex-col lg:flex-row gap-[50px] lg:gap-[150px] py-24 lg:py-36'>
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
        </section>
        <section>
          <div className='max-w-[1168px] mx-auto px-6 py-36 relative'>
            <div className='absolute top-12 -ml-[30px]  lg:-ml-[60px] z-[-1]'>
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
              <div className='flex flex-col justify-between mt-4 gap-8'>
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
                <a className='uppercase font-bold text-primary_blue lg:absolute right-0 underline underline-offset-8'>
                  View case study
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#f6f7f7] relative'>
          <div className='max-w-[1168px] mx-auto px-6 flex flex-col lg:flex-row lg:items-end gap-[50px] lg:gap-[150px] py-24 lg:py-36'>
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
        </section>
      </main>
    </>
  );
}
