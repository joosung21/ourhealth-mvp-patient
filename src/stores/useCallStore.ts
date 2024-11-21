import { create } from 'zustand';

interface CallState {
  callStep: number;
  setCallStep: (callStep: number) => void;
}

export const useCallStore = create<CallState>((set) => ({
  callStep: 0,
  setCallStep: (callStep) => set({ callStep }),
}));
