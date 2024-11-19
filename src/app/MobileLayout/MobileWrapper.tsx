import { Outlet } from 'react-router-dom';

export default function MobileWrapper() {
  return (
    <div className="h-[100dvh] flex items-center justify-center bg-gray-100">
      <div className="w-full md:max-w-[390px] h-full md:max-h-[844px] overflow-hidden bg-white">
        <Outlet />
      </div>
    </div>
  );
}
