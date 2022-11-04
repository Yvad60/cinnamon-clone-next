export default function SectionNoiseBg({ children }) {
  return (
    <div className='bg-black bg-opacity-90 relative'>
      <div className='bg-hero_noise absolute h-full w-full z-[-1]'></div>
      <div>{children}</div>
    </div>
  );
}
