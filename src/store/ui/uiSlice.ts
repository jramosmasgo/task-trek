import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    isModalOpen: boolean;
    isLoading: boolean;
    themeColor: string;
}

const initialState: UIState = {
    isModalOpen: false,
    isLoading: false,
    themeColor: 'dark',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        setThemeColor: (state, action: PayloadAction<string>) => {
            state.themeColor = action.payload;
        },
    },
});

export default uiSlice.reducer;

export const { openModal, closeModal, startLoading, stopLoading, setThemeColor } = uiSlice.actions;