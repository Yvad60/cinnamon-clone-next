export default function TextBlock({ variant, heading, description, space }) {
  let headingStyles = '';
  let descriptionStyles = '';

  switch (variant) {
    case 'bigger': {
      headingStyles = 'text-[80px] leading-[105px] font-extrabold text-white';
      descriptionStyles =
        'text-xl leading-8 text-text_gray font-semibold max-w-[640px]';
      break;
    }
  }

  return (
    <div className={`w-full flex flex-col ${space}`}>
      <h3 className={headingStyles}>{heading}</h3>
      <p className={descriptionStyles}>{description}</p>
    </div>
  );
}
