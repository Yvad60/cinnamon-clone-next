import React from 'react';
import BlogPostCard from '../BlogPostCard';
import SectionMargin from '../wrappers/SectionMargin';

export default function BlogPosts() {
  return (
    <section>
      <SectionMargin>
        <div className='px-6 py-24 lg:py-36'>
          <div className='flex gap-8 overflow-x-auto no-scrollbar'>
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
          </div>
        </div>
      </SectionMargin>
    </section>
  );
}
