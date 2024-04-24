import { useSwipeable } from 'react-swipeable';

export const useCategorySwipe = (categoryData, setCurrentIndex) => {
  const handles = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryData.length);
    },
    onSwipedRight: () => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + categoryData.length) % categoryData.length
      );
    },
    trackMouse: true
  });
  return handles
};

export const  generateVisibleCategories = (categoryData, currentIndex, numVisibleItems) => {
    const visibleCategories = []
    for (let i =0 ; i < numVisibleItems ; i++) {
        const index = (currentIndex + i) % categoryData.length
        visibleCategories.push(categoryData[index])
    }
    return visibleCategories
}
