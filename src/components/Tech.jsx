import React, { Suspense, lazy, useEffect, useState } from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

// Lazy load BallCanvas
const BallCanvas = lazy(() => import('./canvas/Ball'));

const Tech = () => {
  const [isLowEnd, setIsLowEnd] = useState(false);
  const [loadedBalls, setLoadedBalls] = useState(0);

  useEffect(() => {
    // Check device capability
    const checkDevice = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent);
      const isLowPerformance = navigator.hardwareConcurrency <= 4;
      setIsLowEnd(isMobile || isLowPerformance);
    };
    checkDevice();
  }, []);

  // Static fallback for low-end devices
  if (isLowEnd) {
    return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-20 h-20 object-contain'
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28' key={technology.name}>
          <Suspense
            fallback={
              <div className='w-full h-full flex items-center justify-center'>
                <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-red-700' />
              </div>
            }
          >
            <BallCanvas
              icon={technology.icon}
              onLoad={() => setLoadedBalls(prev => prev + 1)}
            />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');