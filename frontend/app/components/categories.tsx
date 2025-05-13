import Image from "next/image";
const Categories = () => {
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icon.webp"
                alt="icon image"
                width={20}
                height={20}
                />
                <span className="text-xs">Venue1</span>
            </div>
            
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icon.webp"
                alt="icon image"
                width={20}
                height={20}
                />
                <span className="text-xs">Venue2</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icon.webp"
                alt="icon image"
                width={20}
                height={20}
                />
                <span className="text-xs">Venue3</span>
            </div>
        
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icon.webp"
                alt="icon image"
                width={20}
                height={20}
                />
                <span className="text-xs">Venue4</span>
            </div>
        </div>
    )
}

export default Categories;  