import { create } from 'zustand';

const useStore = create((set) => ({
  currentCompany: 'TOTAL',
  setCurrentCompany: (company) => set({ currentCompany: company }),
}));

export { useStore };
