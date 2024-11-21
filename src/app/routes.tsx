import { Navigate, Route, Routes } from 'react-router-dom';
import Accordion from '@/samples/Accordion';
import Alert from '@/samples/Alert';
import Card from '@/samples/Card';
import Chatting from '@/samples/Chatting/Chatting';
import DrageAndDrop from '@/samples/DrageAndDrop';
import Drawers from '@/samples/Drawer';
import FetchData from '@/samples/FetchData';
import List from '@/samples/List';
import MultiLanguage from '@/samples/MultiLanguage';
import StateControl from '@/samples/StateControl';
import Tooltip from '@/samples/Tooltip';
import AvailableInterpriters from '@/views/AvailableInterpriters/AvailableInterpriters';
import BookTime from '@/views/BookTime/BookTime';
import Dashboard from '@/views/Dashboard/Dashboard.page';
import AppSpec from '../samples/AppSpec';
import Color from '../samples/Color';
import DatePicker from '../samples/DatePicker';
import Form from '../samples/Form';
import Modal from '../samples/Modal';
import Notification from '../samples/Notification';
import Responsive from '../samples/Responsive';
import Todo from '../samples/Todo';
import Typography from '../samples/Typography';
import ForgotPassword from './Auth/ForgotPassword';
import Login from './Auth/Login';
import Register from './Auth/Register';
import RegisterComplete from './Auth/Register/RegisterComplete';
import RegisterEntry from './Auth/Register/RegisterEntry';
import RegisterInformation from './Auth/Register/RegisterInformation';
import RegisterLanguage from './Auth/Register/RegisterLanguage';
import RegisterName from './Auth/Register/RegisterName';
import Layout from './Layouts/Layout';
import MobileWrapper from './MobileLayout/MobileWrapper';
import NotFound from './NotFound';
import Splash from './Splash';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/splash" replace />} />

      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> */}

      {/* Mobile Pages */}
      <Route path="/register" element={<Register />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-entry" element={<RegisterEntry />} />
      <Route path="/register-language" element={<RegisterLanguage />} />
      <Route path="/register-name" element={<RegisterName />} />
      <Route path="/register-information" element={<RegisterInformation />} />
      <Route path="/register-complete" element={<RegisterComplete />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/book-time" element={<BookTime />} />
      <Route path="/available-interpriters" element={<AvailableInterpriters />} />

      {/* Layout Wrapper */}
      <Route element={<Layout />}>
        {/* Redirect */}

        {/* Main Routes */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/app-spec" element={<AppSpec />} />
        <Route path="/responsive" element={<Responsive />} />
        <Route path="/fetch-data" element={<FetchData />} />
        <Route path="/state-control" element={<StateControl />} />
        <Route path="/multi-language" element={<MultiLanguage />} />
        <Route path="/chatting" element={<Chatting />} />

        {/* UI Sub-Routes */}
        <Route path="/ui">
          <Route path="/ui/color" element={<Color />} />
          <Route path="/ui/typography" element={<Typography />} />
          <Route path="/ui/form" element={<Form />} />
          <Route path="/ui/date-picker" element={<DatePicker />} />
          <Route path="/ui/notification" element={<Notification />} />
          <Route path="/ui/modal" element={<Modal />} />
          <Route path="/ui/alert" element={<Alert />} />
          <Route path="/ui/drawer" element={<Drawers />} />
          <Route path="/ui/list" element={<List />} />
          <Route path="/ui/tooltip" element={<Tooltip />} />
          <Route path="/ui/card" element={<Card />} />
          <Route path="/ui/drag-and-drop" element={<DrageAndDrop />} />
          <Route path="/ui/accordion" element={<Accordion />} />
        </Route>
      </Route>
    </Routes>
  );
}
