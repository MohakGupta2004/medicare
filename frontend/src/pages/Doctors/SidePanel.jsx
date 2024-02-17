import converTime from "../../utils/convertTime"
const SidePanel = ({doctorId,ticketPrice,timeSlots}) =>{
    return(
        <div className="shadow-panelShadow p-5 lg:p-7 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">Fees</p>
                <span>
                    {ticketPrice}
                </span>
            </div>

            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                </p>
                <ul className="mt-3">
                    {timeSlots?.map((item,index)=>(
                        <li key={index} className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            {converTime(item.startingTime)} - {converTime(item.endingTime)}
                        </p>
                        
                    </li>
                    ))}
                </ul>
            </div>

            <button className="btn px-2 w-full rounded-md">Book Appointment</button>
        </div>
    )
}

export default SidePanel