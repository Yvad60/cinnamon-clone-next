import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='bg-black'>
      <div className='flex justify-between max-w-[1012px] mx-auto px-6 items-center py-4'>
        <picture>
          <img
            src='/assets/icons/logo_white.svg'
            alt='white logo'
            className='w-[160px]'
          />
        </picture>
        <nav className='hidden lg:flex gap-9 text-white items-center font-semibold'>
          <Link href='projects'>Projects</Link>
          <Link href='services'>Services</Link>
          <Link href='about-us'>About us</Link>
          <Link href='careers'>Careers</Link>
          <Link href='contact'>
            <picture>
              <img
                className='w-12'
                src='/assets/icons/play-circle.svg'
                alt='play button'
              />
            </picture>
          </Link>
          <Link href='contact'>
            <button className='py-3 px-10 bg-primary_blue text-white border-t-white border-t-2 shadow-[10px 0px 0px 0px white inset]'>
              Contact Us
            </button>
          </Link>
        </nav>
        <nav className='lg:hidden'>
          <picture>
            <img
              src='/assets/icons/humberger_white.svg'
              alt='white mobile menu item'
            />
          </picture>
        </nav>
      </div>
    </header>
  );
}
