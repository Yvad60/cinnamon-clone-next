import servicesData from '../../data/services';
import IconCard from '../IconCard';
import SectionMargin from '../wrappers/SectionMargin';
import SectionNoiseBg from '../wrappers/SectionNoiseBg';

export default function Services() {
  return (
    <section>
      <SectionNoiseBg>
        <SectionMargin>
          <div className='py-20 flex flex-col lg:flex-row items-start gap-28'>
            <h2 className='text-white text-[40px] lg:text-[54px] leading-[72px] font-bold'>
              Our services
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-content-stretch flex-1 gap-y-24'>
              {servicesData.map((service, index) => (
                <IconCard {...service} key={index} />
              ))}
            </div>
          </div>
        </SectionMargin>
      </SectionNoiseBg>
    </section>
  );
}
