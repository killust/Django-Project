import {create} from "zustand"

interface SignupModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const UseSignupModal = create<SignupModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default UseSignupModal;