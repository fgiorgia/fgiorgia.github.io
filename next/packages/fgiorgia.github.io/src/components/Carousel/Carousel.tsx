'use client'

import { useState, useEffect } from 'react';

import { images } from './images';
import Image from 'next/image';
import { classNames } from '@fgiorgia-site/utils/style/classNames';
import Stack from '../Stack/Stack';

const imageLoadingTimeMs = 1000;
const imageAnimationSleepMs = 8000;

const getIndex = (index: number) => {
  return (images.length + index) % images.length
}

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimationActive, setIsAnimationActive] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimationActive(false)
      setActiveIndex((prevIndex) => (getIndex(prevIndex + 1)));
      setTimeout(() => setIsAnimationActive(true), imageLoadingTimeMs)
    }, imageAnimationSleepMs);

    return () => clearInterval(intervalId);
  }, [images]);

  const indeces = [getIndex(activeIndex - 1), getIndex(activeIndex)];

  return (
    <Stack className='justify-center'>
      <Stack style={{ height: '32rem', width: '100%', position: 'relative', overflowX: 'hidden' }}>
        <Stack style={{ height: '100%', width: '200%', position: 'absolute' }}>
          {indeces.map((i) => {
            return (
              <Image key={images[i].image.src} src={images[i].image} alt={images[i].description}
                className={classNames('object-cover w-1/2 ',
                  isAnimationActive ? `transition-transform duration-1000 -translate-x-full` : '-translate-x-0'
                )} />
            )
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Carousel;