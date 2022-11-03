import React from 'react';
import TextBlock from './TextBlock';

function IconCard({ iconSrc, heading, description }) {
  return (
    <div className='max-w-[256px] flex flex-col gap-6'>
      <picture>
        <img className='w-12' src={iconSrc} alt='' />
      </picture>
      <TextBlock
        heading={heading}
        variant='small'
        space='gap-5'
        description={description}
        textShade='light'
      />
    </div>
  );
}

export default IconCard;
