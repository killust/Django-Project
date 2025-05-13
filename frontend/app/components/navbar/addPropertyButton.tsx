'use client'


import UseAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import UseLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";


interface AddPropertyButtonProps {
    userId?: string | null
}

const AddPropertyButton:React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const router = useRouter();
    const loginModal = UseLoginModal();
    const addPropertyModal = UseAddPropertyModal();
    const addAVenue =  () => {
        if (userId){
            //addPropertyModal.open()
            router.push('/properties/propertiesCustom')
        } else {
            loginModal.open()
        }
    }
    return(
        <div 
            onClick={addAVenue}
            className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200">
            Your Venue guide
        </div>
    )
}

export default AddPropertyButton;