'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Lightbox({ images, startIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, goToPrevious, goToNext]);

  const onTouchStartHandler = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStartHandler}
        onTouchMove={onTouchMoveHandler}
        onTouchEnd={onTouchEndHandler}
      >
        <img
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1} of ${images.length}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        <div className="absolute -bottom-8 text-white text-lg">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-5 right-5 text-white text-4xl hover:text-gray-300 transition-colors"
        aria-label="Close"
      >
        &times;
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
        className="absolute left-5 text-white text-5xl hover:text-gray-300 transition-colors hidden md:block"
        aria-label="Previous image"
      >
        &#8249;
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className="absolute right-5 text-white text-5xl hover:text-gray-300 transition-colors hidden md:block"
        aria-label="Next image"
      >
        &#8250;
      </button>
    </div>
  );
} 