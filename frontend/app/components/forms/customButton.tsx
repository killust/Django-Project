interface CustomButtonProps{
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return(
        <div
        onClick={onClick}
        className={`w-full py-4 text-center bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer ${className}`}
        >
            {label}
        </div>
    )
}


export default CustomButton;