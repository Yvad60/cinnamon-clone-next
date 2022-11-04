export default function TextBlock({
  variant,
  heading,
  description,
  space,
  textShade,
}) {
  let headingStyles = '';
  let descriptionStyles = '';
  switch (variant) {
    case 'bigger': {
      headingStyles =
        'text-[40px] leading-[56px] lg:text-[80px] lg:leading-[105px] font-extrabold';
      descriptionStyles =
        'text-[18px] lg:text-xl leading-8 text-text_gray font-medium lg:font-semibold max-w-[640px]';
      break;
    }

    case 'medium': {
      headingStyles =
        'text-[30px] leading-[44px] lg:text-[40px] lg:leading-[56px] font-bold';
      descriptionStyles =
        'text-[16px] leading-[26px] text-gray-800 font-medium';
      break;
    }

    case 'small': {
      headingStyles = 'text-[24px] leading-[36px] font-bold';
      descriptionStyles = 'text-[16px] leading-[26px] text-zinc-00 font-medium';
      break;
    }
    case 'avatar-tiny': {
      headingStyles = 'text-2xl leading-9 font-bold';
      descriptionStyles = 'font-medium';
    }
  }

  return (
    <div
      className={`w-full flex whitespace-pre-line flex-col ${space} ${
        textShade === `light` && 'text-white'
      }`}
    >
      <h3 className={headingStyles}>{heading}</h3>
      <p className={descriptionStyles}>{description}</p>
    </div>
  );
}
