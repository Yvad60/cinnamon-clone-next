import Head from 'next/head';
import Link from 'next/link';
import BlogPostCard from '../components/BlogPostCard';
import Button from '../components/Button';
import Hero from '../components/sections/Hero';
import Products from '../components/sections/Products';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import TextBlock from '../components/TextBlock';

export default function Home() {
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
    <>
      <Head>
        <title>CINNAMON | All software, zero bullshit.</title>
        <meta name='description' content='Cinamon clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <Products />
        <Services />
        <Team />
        {/* Who are we section */}
        <section className='bg-[#f6f7f7]'>
          <div className='max-w-[1168px] mx-auto px-6 py-24 lg:py-52'>
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
                  <h3 className='font-bold text-xl' key={index}>
                    {teamName}
                  </h3>
                ))}
              </div>
              <div className='lg:absolute right-0 lg:-mt-16'>
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
        <section>
          <div className='max-w-[1168px] mx-auto px-6 py-24 lg:py-36'>
            <div className='flex gap-8 overflow-x-auto'>
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section>
          <div>
            <div className='pt-36 px-16 flex flex-col text-white'>
              <div className=' grid grid-cols-3 flex-1 pb-24'>
                <div className='col-span-1 flex flex-col gap-8'>
                  <h1 className='text-3xl tracking-wide font-bold'>CINNAMON</h1>
                  <ul className=' flex flex-col text-zinc-400'>
                    <li className=''>
                      <Link href={''}>Home</Link>
                    </li>
                    <li className=''>
                      <Link href={''}>Projects</Link>
                    </li>
                    <li className=''>
                      <Link href={''}>Services</Link>
                    </li>
                    <li className=''>
                      <Link href={''}>About Us</Link>
                    </li>
                    <li className=''>
                      <Link href={''}>Careers</Link>
                    </li>
                    <li className=''>
                      <Link href={''}>Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className='col-span-2 space-y-10 pl-16 pt-6'>
                  <h1 className='text-3xl font-bold'>
                    All software, zero bullshit
                  </h1>
                  {/* <div className='grid grid-cols-3 space-x-24'>
                    <Header_paragraph
                      heading={'Zagreb'}
                      paragraph={
                        'Slavonska avenija 6,10000, Zagreb, Croatia +385 99 347 3103'
                      }
                    />
                    <Header_paragraph
                      heading={'New York'}
                      paragraph={
                        '500 7th Ave, New York, NY 10018, United States'
                      }
                    />
                    <Header_paragraph
                      heading={'Belgrade'}
                      paragraph={
                        'Bulevar vojvode Mišića 37 11000, Belgrade, Serbia'
                      }
                    />
                  </div> */}
                </div>
              </div>
              <div className=' flex flex-col gap-8 divide-y-2 divide-zinc-500'>
                <div className='grid grid-cols-3 gap-56'>
                  <Link
                    className='place-self-end underline underline-offset-1 pr-8'
                    href={''}
                  >
                    hello@cinnamon.agency
                  </Link>
                  <div className='flex flex-col gap-4 pr-12 pt-6'>
                    <p className='font-bold '>Our newsletter</p>
                    <div class='flex items-center border-b border-zinc-400 py-2'>
                      <input
                        className='text-lg bg-transparent text-zinc-400 outline-transparent underline underline-offset-8'
                        type={'text'}
                        placeholder={'Your E-mail'}
                      />
                    </div>

                    <Button text={'Subscribe'} />
                  </div>
                  <div className='flex flex-col gap-4 pt-6'>
                    <picture>
                      <img
                        className='w-[12rem]'
                        src='/Images/Footer/pangea-badge.svg'
                        alt=''
                      />
                    </picture>
                    <picture>
                      <img
                        className='max-w-[12rem]'
                        src='/Images/Footer/clutch-badge.webp'
                        alt=''
                      />
                    </picture>
                  </div>
                </div>
                <div className='flex gap-8 justify-between pt-8'>
                  <div className='flex gap-8 text-sm text-zinc-400'>
                    <p>2022 Cinnamon</p>
                    <p className='underline underline-offset-8'>
                      Privacy Policy
                    </p>
                  </div>
                  <div>
                    <ul className=' flex gap-8'>
                      <li className=''>
                        <Link href={''}>
                          <picture>
                            <img src='/Images/Footer/linkedin.svg' alt='' />
                          </picture>
                        </Link>
                      </li>
                      <li className=''>
                        <Link href={''}>
                          <picture>
                            <img src='/Images/Footer/dribble.svg' alt='' />
                          </picture>
                        </Link>
                      </li>
                      <li className=''>
                        <Link href={''}>
                          <picture>
                            <img src='/Images/Footer/behance.svg' alt='' />
                          </picture>
                        </Link>
                      </li>
                      <li className=''>
                        <Link href={''}>
                          <picture>
                            <img src='/Images/Footer/instagram.svg' alt='' />
                          </picture>
                        </Link>
                      </li>
                      <li className=''>
                        <Link href={''}>
                          <picture>
                            <img src='/Images/Footer/facebook.svg' alt='' />
                          </picture>
                        </Link>
                      </li>
                      <li className=''>
                        <Link href={''}>
                          <picture>
                            <img src='/Images/Footer/wifi.svg' alt='' />
                          </picture>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
