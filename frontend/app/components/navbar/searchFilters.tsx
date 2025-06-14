const SearchFilters = () => {
    return(
        <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
            <div  className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">where</p>
                        <p className="text-cm">wanted location</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check in</p>
                        <p className="text-cm">Add Dates</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-cm">Add Dates</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-cm">Add Guests</p>
                    </div>

                </div>
            </div>

            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-airbnb rounded-full text-white hover:bg-airbnb-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 32 32" 
                style={{ display: 'block', fill: 'none', height: '16px', width:'16px', stroke: 'currentColor', strokeWidth: '5.333333333333333', overflow: 'visible' }} 
                aria-hidden="true" role="presentation" focusable="false"><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                </div>
            </div>

        </div>
    )
}

export default SearchFilters;