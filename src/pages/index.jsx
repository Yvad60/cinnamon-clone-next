import Head from 'next/head';
import BlogPosts from '../components/sections/BlogPosts';
import CinamonCollege from '../components/sections/CinamonCollege';
import Hero from '../components/sections/Hero';
import Products from '../components/sections/Products';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Testimonial from '../components/sections/Testimonial';
import WhoAreWe from '../components/sections/WhoAreWe';

export default function Home() {
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
        <Testimonial />
        <WhoAreWe />
        <CinamonCollege />
        <BlogPosts />
      </main>
    </>
  );
}
