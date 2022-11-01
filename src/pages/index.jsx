import Head from 'next/head';
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
          <div className='w-[1120px] mx-auto pt-48 pb-44'>
            <TextBlock
              variant='bigger'
              space='gap-[20px]'
              heading='Results focused design &
development agency.'
              description='Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, well get your product off the ground and build a momentum for your success.'
            />
          </div>
        </section>
      </main>
    </>
  );
}
