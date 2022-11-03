import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScrollChange() {
    if (window.scrollY > 20) setIsScrolled(true);
    else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollChange);
    return () => {
      window.removeEventListener('scroll', setIsScrolled);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between max-w-[1168px] mx-auto px-6 items-center py-4'>
        <picture>
          <img
            src='/assets/icons/logo_white.svg'
            alt='white logo'
            className='w-[160px]'
          />
        </picture>
        <nav
          className={`hidden lg:flex gap-9 items-center font-semibold ${
            isScrolled ? 'text-black' : 'text-white'
          } `}
        >
          <Link href='projects'>Projects</Link>
          <Link href='services'>Services</Link>
          <Link href='about-us'>About us</Link>
          <Link href='careers'>Careers</Link>
          <Link href='contact'>
            {isScrolled ? (
              <picture>
                <img
                  className='w-12'
                  src='/assets/icons/play-circle_dark.svg'
                  alt='black play button'
                />
              </picture>
            ) : (
              <picture>
                <img
                  className='w-12'
                  src='/assets/icons/play-circle_white.svg'
                  alt='play button'
                />
              </picture>
            )}
          </Link>
          <Link href='contact'>
            <Button>Contact Us</Button>
          </Link>
        </nav>
        <nav className='lg:hidden'>
          {isScrolled ? (
            <picture>
              <img
                src='/assets/icons/humbeger_dark.svg'
                alt='white mobile menu item'
              />
            </picture>
          ) : (
            <picture>
              <img
                src='/assets/icons/humberger_white.svg'
                alt='white mobile menu item'
              />
            </picture>
          )}
        </nav>
      </div>
    </header>
  );
}
