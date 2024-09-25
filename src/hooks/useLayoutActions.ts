import { useDispatch } from "react-redux";
import { closeModal, openModal } from '@/store/ui/uiSlice';

export const useLayoutActions = () => {
    const dispatch = useDispatch();

    const uiOpenModal = () => {
        dispatch(openModal());
    }

    const uiCloseModal = () => {
        dispatch(closeModal());
    }

    return { uiOpenModal, uiCloseModal }
}