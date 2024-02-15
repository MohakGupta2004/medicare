const SidePanel = () =>{
    return(
        <div className="shadow-panelShadow p-5 lg:p-7 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">Fees</p>
                <span>
                    500 Rupees
                </span>
            </div>

            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                </p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Sunday
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:30 PM
                        </p>
                        
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Tuesday
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:30 PM
                        </p>
                        
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Wednesday
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:30 PM
                        </p>
                        
                    </li>
                </ul>
            </div>

            <button className="btn px-2 w-full rounded-md">Book Appointment</button>
        </div>
    )
}

export default SidePanel