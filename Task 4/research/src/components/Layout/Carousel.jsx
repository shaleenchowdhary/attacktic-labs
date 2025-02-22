import { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = [
    '../../../public/Carousel/zero.jpeg',
    '../../../public/Carousel/one.jpeg',
    '../../../public/Carousel/two.jpg',
    '../../../public/Carousel/three.jpeg',
    '../../../public/Carousel/four.jpg',
    '../../../public/Carousel/five.jpg',
    '../../../public/Carousel/six.jpg',
    '../../../public/Carousel/seven.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full md:w-4/5 mx-auto px-4"
      data-carousel="slide"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-lg h-36 md:h-[550px] mb-4 w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full duration-700 ease-in-out transform ${
              index === activeIndex ? 'block' : 'hidden'
            } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            data-carousel-item
          >
            <img
              src={src}
              className="object-cover object-top w-full h-full"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
