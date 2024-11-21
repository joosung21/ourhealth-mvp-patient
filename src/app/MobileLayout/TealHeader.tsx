import { useEffect, useRef, useState } from 'react';
import BellIcon from '@/assets/notification.svg';

export default function TealHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 진행 상태 계산 (0에서 1 사이)
      const maxScroll = 100; // 높이 변경을 시작할 스크롤 픽셀 값
      const currentScroll = Math.min(window.scrollY, maxScroll);
      const progress = currentScroll / maxScroll;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 초기 높이와 축소 높이 정의
  const initialHeight = 160;
  const finalHeight = 80;

  // 부드러운 높이 계산 (Ease Out Quad 인터폴레이션)
  const calculateHeight = () => {
    // Ease Out Quad 공식: height = start + (end - start) * (1 - (1 - t)^2)
    return initialHeight + (finalHeight - initialHeight) * (1 - Math.pow(1 - scrollProgress, 2));
  };

  return (
    <div
      ref={headerRef}
      style={{
        height: `${calculateHeight()}px`,
        transition: 'height 0.3s ease-out',
      }}
      className="tealHeader"
    >
      <div className="flex-1">
        <p className="text-white text-[14.56px]">Good Morning,</p>
        <p className="text-white font-semibold text-[21px]">Savannah Nguyen</p>
      </div>
      <div className="ml-auto">
        <button className="relative p-1 mt-1">
          <img src={BellIcon} alt="Notification" />
          {/* <span className="absolute top-1 right-[6px] w-2 h-2 bg-[#FF0000] rounded-full"></span> */}
        </button>
      </div>
    </div>
  );
}
