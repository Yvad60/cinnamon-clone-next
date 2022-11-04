export default function BlogPostCard() {
  return (
    <div className='flex-shrink-0 w-[250px] lg:w-[352px]'>
      <picture>
        <img
          src='/assets/images/blog_posts/Freelance_VS.webp'
          alt='office'
          className='mb-4'
        />
      </picture>
      <p className='text-txt-dark text-xs font-bold'>SALES</p>
      <div className='grid grid-flow-col gap-3'>
        <p className='truncate'>Matija Bermanec & Lorena Ujević</p>
        <div className='bg-yellow-400 w-[0.4rem] h-[0.4rem] my-auto rounded-full'></div>
        <p>2022-10-13</p>
        <div className='bg-yellow-400 w-[0.4rem] h-[0.4rem] my-auto rounded-full'></div>
        <p>6min</p>
      </div>
      <h5 className='text-xl mt-2 lg:text-2xl font-bold text-case-title'>
        Differences in Hiring an Agency vs. Freelancers 2.0
      </h5>
    </div>
  );
}
