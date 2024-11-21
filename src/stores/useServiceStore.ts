import { create } from 'zustand';
import { TRANSCRIPT_HISTORY, UPCOMING_APPOINTMENT } from '../mocks/appoinmets';

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
