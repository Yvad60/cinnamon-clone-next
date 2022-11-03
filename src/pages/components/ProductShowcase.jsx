import TextBlock from './TextBlock';

export default function ProductShowcase({
  coverImageSrc,
  bgVariant,
  tagList,
  title,
  description,
}) {
  return (
    <div className='flex flex-col gap-6'>
      <div
        className={`${
          bgVariant === 'green'
            ? 'bg-product_green'
            : bgVariant === 'purple'
            ? 'bg-product_purple'
            : bgVariant === 'yellow'
            ? 'bg-product_yellow'
            : ''
        } max-h-fit overflow-hidden`}
      >
        <picture>
          <img
            src={coverImageSrc}
            alt={title}
            className='transition-all duration-700 ease-in-out hover:scale-[1.05]'
          />
        </picture>
      </div>
      <div className='text-xs lg:text-sm text-gray-500 uppercase font-bold flex gap-5 tracking-tighter lg:gap-9'>
        {tagList.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div className='max-w-[764px]'>
        <TextBlock
          heading={title}
          variant='medium'
          description={description}
          space={'gap-4'}
        />
      </div>
    </div>
  );
}
