import { create } from 'zustand';

interface Transcript {
  date: string;
  time: string;
  interpreter: string;
  reference: string;
}

interface UpcomingAppointment {
  date: string;
  time: string;
  interpreter: string;
  reference: string;
}

interface TranscriptState {
  transcriptHistory: Transcript[];
  setTranscriptHistory: (transcriptHistory: Transcript[]) => void;
}

interface UpcomingAppointmentState {
  upcomingAppointment: UpcomingAppointment | null;
  setUpcomingAppointment: (upcomingAppointment: UpcomingAppointment) => void;
}

const UPCOMING_APPOINTMENT = {
  date: '2024.05.15',
  time: '11:00AM',
  interpreter: 'Eleanor Pena',
  reference: '#NYH2024112303CA',
};

const TRANSCRIPT_HISTORY = [
  {
    date: '2024.03.04',
    time: '1:30PM',
    interpreter: 'Floyd Miles',
    reference: '#NYH2024030402CA',
  },
  {
    date: '2024.02.26',
    time: '2:25PM',
    interpreter: 'Theresa Webb',
    reference: '#NYH2024022602CA',
  },
  {
    date: '2024.02.22',
    time: '3:00PM',
    interpreter: 'Daryl jennings',
    reference: '#NYH2024022612BC',
  },
  {
    date: '2023.10.01',
    time: '10:00PM',
    interpreter: 'Curtis Mcdonald',
    reference: '#NYH2024022612BC',
  },
  {
    date: '2023.10.01',
    time: '10:00PM',
    interpreter: 'Curtis Mcdonald',
    reference: '#NYH2024022612BC',
  },
];

export const useTranscriptStore = create<TranscriptState>((set) => ({
  transcriptHistory: TRANSCRIPT_HISTORY,
  // transcriptHistory: [],
  setTranscriptHistory: (transcriptHistory) => set({ transcriptHistory }),
}));

export const useUpcomingAppointmentStore = create<UpcomingAppointmentState>((set) => ({
  upcomingAppointment: UPCOMING_APPOINTMENT,
  // upcomingAppointment: null,
  setUpcomingAppointment: (upcomingAppointment) => set({ upcomingAppointment }),
}));
