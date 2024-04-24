import React, { useState } from 'react';
import CategorySelectedIcon from './CategorySelectedIcon';
import {
  generateVisibleCategories,
  useCategorySwipe,
} from '../../../../utils/CategorySwiper';

const categoryData = [
  'Gaming',
  'All',
  'Thoughts',
  'Music',
  'Thrillers',
  'Mixes',
  'Avatar',
  'Film criticisma',
  'Korean dramas',
  'Characters',
  'Eating',
];

function Category() {
  const [selectedCategory, setSelectedCategory] = useState(categoryData[1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useCategorySwipe(categoryData, setCurrentIndex);

  const numVisibleItems = categoryData.length;

  const visibleCategories = generateVisibleCategories(
    categoryData,
    currentIndex,
    numVisibleItems
  );

  return (
    <div
      {...handlers}
      className='flex items-center bg-category-gradient py-4 shadow-category-shadow w-full overflow-hidden'
      style={{ width: '100%' }}
    >
      <div
        className='flex transition-transform duration-300 ml-2 gap-7'
        style={{
          transform: `translateX(-${100 / numVisibleItems - currentIndex}%)`,
          width: '100%',
        }}
      >
        {visibleCategories.map((category, i) => (
          <div
            key={i} // Chỉ mục làm khóa
            className=' relative cursor-pointer'
            style={{ width: `${100 / numVisibleItems}%` }}
            onClick={() => setSelectedCategory(category)}
          >
            <p className='text-[#FFFFFF99] text-[13px] font-semibold text-center whitespace-nowrap'>
              {category}
            </p>
            {selectedCategory === category && (
              <div className='absolute top-1 border-b border-[#c227fb28] w-[120px] flex justify-center'>
                <CategorySelectedIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
