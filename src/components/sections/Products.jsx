import products from '../../data/products';
import ProductShowcase from '../ProductShowcase';
import SectionMargin from '../wrappers/SectionMargin';

export default function Products() {
  return (
    <section>
      <SectionMargin>
        <div className='flex flex-col gap-16 lg:gap-40 my-20 lg:my-36'>
          {products.map((product, index) => (
            <ProductShowcase {...product} key={index} />
          ))}
        </div>
      </SectionMargin>
    </section>
  );
}
