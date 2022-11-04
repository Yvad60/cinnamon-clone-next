import TextBlock from '../TextBlock';
import SectionMargin from '../wrappers/SectionMargin';
import SectionNoiseBg from '../wrappers/SectionNoiseBg';

export default function Hero() {
  return (
    <section>
      <SectionNoiseBg>
        <SectionMargin>
          <div className='pt-20 lg:pt-48 pb-28 lg:pb-44'>
            <TextBlock
              variant='bigger'
              space='gap-[20px]'
              textShade='light'
              heading='Results focused design &
development agency.'
              description='Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, well get your product off the ground and build a momentum for your success.'
            />
          </div>
        </SectionMargin>
      </SectionNoiseBg>
    </section>
  );
}
