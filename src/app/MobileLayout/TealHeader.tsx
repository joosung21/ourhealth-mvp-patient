import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Clock from '@/assets/clock-black.svg';
import BellIcon from '@/assets/notification.svg';
import { useTranscriptStore, useUpcomingAppointmentStore } from '@/stores/useServiceStore';
import { useUserStore } from '@/stores/useUserStore';

export default function TealHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const transcriptHistory = useTranscriptStore.getState().transcriptHistory;
  const upcomingAppointment = useUpcomingAppointmentStore.getState().upcomingAppointment;
  const fullName = useUserStore((state) => state.fullName);

  const greeting = () => {
    const currentHour = dayjs().hour();
    if (currentHour < 12) {
      return 'Good Morning,';
    } else if (currentHour < 18) {
      return 'Good Afternoon,';
    }
    return 'Good Evening,';
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 100; // scroll progress max value
      const currentScroll = Math.min(window.scrollY, maxScroll);
      const progress = currentScroll / maxScroll;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const initialHeight = 170;
  const finalHeight = 110;

  // 부드러운 높이 계산 (Ease Out Quad 인터폴레이션)
  const calculateHeight = () => {
    return initialHeight + (finalHeight - initialHeight) * (1 - (1 - scrollProgress) ** 2);
  };

  return (
    <>
      <div
        ref={headerRef}
        style={{
          height: `${calculateHeight()}px`,
          transition: 'height 0.3s ease-out',
        }}
        className="tealHeader"
      >
        <div className="flex-1">
          <p className="text-white text-[14.56px]">{greeting()}</p>
          <p className="text-white font-semibold text-[21px]">{fullName}</p>
        </div>
        <div className="ml-auto">
          <div className="relative p-1 mt-1">
            <img src={BellIcon} alt="Notification" />
            {/* <span className="absolute top-1 right-[6px] w-2 h-2 bg-[#FF0000] rounded-full"></span> */}
          </div>
        </div>
        {(transcriptHistory.length > 0 || upcomingAppointment.length > 0) && (
          <button
            type="button"
            className="button-secondary absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 min-w-[200px] flex items-center justify-center"
            onClick={() => navigate('/book-time')}
          >
            <img src={Clock} alt="Clock" className="inline-block mr-2" />
            Book Appointment
          </button>
        )}
      </div>
    </>
  );
}
