import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export const usePersistedCounterStore = create(
  persist<CounterState>(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'counter-store',
    }
  )
);
