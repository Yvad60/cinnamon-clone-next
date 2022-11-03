import Head from 'next/head';
import products from '../data/products';
import servicesData from '../data/services';
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
          <div className='max-w-[1168px] mx-auto px-6  pt-20 lg:pt-48 pb-28 lg:pb-44'>
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
      </main>
    </>
  );
}
