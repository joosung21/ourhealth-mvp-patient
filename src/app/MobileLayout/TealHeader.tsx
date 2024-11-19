import { useEffect, useState } from 'react';

export default function TealHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`tealHeader ${scrolled ? 'h-24' : 'h-[193px]'}`}>
      <div className="flex-1">
        <p className="text-white text-[14.56px]">Good Morning,</p>
        <p className="text-white font-semibold text-[21px]">Savannah Nguyen</p>
      </div>
      <div className="ml-auto">
        <button className="relative p-1 mt-1">
          <img src="./src/assets/notification.svg" alt="Notification" />
          <span className="absolute top-1 right-[6px] w-2 h-2 bg-[#FF0000] rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
