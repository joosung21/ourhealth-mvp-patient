import { create } from 'zustand';

// Step0: Default
// Step1: Verify the appointment via QR code
// Step2: Ready to call
// Step3: Calling
// Step4: Call ended
// Step5: Show Action items
// Step6: Completed

interface CallState {
  callStep: number;
  setCallStep: (callStep: number) => void;
}

export const useCallStore = create<CallState>((set) => ({
  callStep: 4,
  setCallStep: (callStep) => set({ callStep }),
}));
