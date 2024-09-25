import { RootState } from '@/store/store'; // Adjust the import according to your actual store file location

export const selectIsModalOpen = (state: RootState) => state.ui.isModalOpen;
export const selectIsLoading = (state: RootState) => state.ui.isLoading;
export const selectThemeColor = (state: RootState) => state.ui.themeColor;