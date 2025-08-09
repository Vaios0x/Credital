import { create } from 'zustand'

type UiState = {
  isSidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  toast: { type: 'success' | 'error' | 'info'; message: string } | null
  showToast: (toast: UiState['toast']) => void
  clearToast: () => void
}

export const useUiStore = create<UiState>((set) => ({
  isSidebarOpen: false,
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
  toast: null,
  showToast: (toast) => set({ toast }),
  clearToast: () => set({ toast: null }),
}))


