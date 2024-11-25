import { Navigate, Route, Routes } from 'react-router-dom';
import AboutInterpriter from '@/views/AvailableInterpriters/AboutInterpriter';
import AvailableInterpriters from '@/views/AvailableInterpriters/AvailableInterpriters';
import BookingConfirmed from '@/views/AvailableInterpriters/BookingConfirmed';
import BookTime from '@/views/BookTime/BookTime';
import Calling from '@/views/Calling/Calling';
import Dashboard from '@/views/Dashboard/Dashboard';
import RegisterComplete from './Auth/Register/RegisterComplete';
import RegisterEntry from './Auth/Register/RegisterEntry';
import RegisterInformation from './Auth/Register/RegisterInformation';
import RegisterLanguage from './Auth/Register/RegisterLanguage';
import RegisterName from './Auth/Register/RegisterName';
import NotFound from './NotFound';
import Splash from './Splash';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/register-entry" />} />

      {/* Mobile Pages */}
      <Route path="/splash" element={<Splash />} />
      <Route path="/register-entry" element={<RegisterEntry />} />
      <Route path="/register-language" element={<RegisterLanguage />} />
      <Route path="/register-name" element={<RegisterName />} />
      <Route path="/register-information" element={<RegisterInformation />} />
      <Route path="/register-complete" element={<RegisterComplete />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/book-time" element={<BookTime />} />
      <Route path="/available-interpriters" element={<AvailableInterpriters />} />
      <Route path="/available-interpriters/:id" element={<AboutInterpriter />} />
      <Route path="/booking-confirmed" element={<BookingConfirmed />} />
      <Route path="/calling" element={<Calling />} />
    </Routes>
  );
}
