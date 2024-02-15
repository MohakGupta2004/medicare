import {formateDate}  from "../../utils/formateDate.js";
const DoctorAbout = ()=>{
    return <div>
            <div>
                <h3 className="text-[15px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                        Soumasish Dasgupta
                    </span>
                </h3>
                <p className="text__para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ipsam reiciendis perferendis dolores neque doloremque veniam voluptate, qui aliquid totam fugiat placeat. Totam nesciunt quam inventore molestiae voluptas quisquam ipsam.
                </p>
            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>

                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {formateDate(new Date('2014-06-23'))} - Present
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in surgery
                            </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            City Hospital, Berhampore.
                        </p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {formateDate(new Date('2008-06-23'))} - {formateDate(new Date('2014-06-23'))}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in surgery
                            </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            City Hospital, Berhampore.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formateDate(new Date('2008-06-23'))} - {formateDate(new Date('2014-06-23'))}
                    </span>
                    <p className="text-[15px] leading-6 font-medium text-textColor">
                        Sr. Surgeon
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            City Hospital, Berhampore.
                    </p>
                </li>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formateDate(new Date('2008-06-23'))} - {formateDate(new Date('2014-06-23'))}
                    </span>
                    <p className="text-[15px] leading-6 font-medium text-textColor">
                        Sr. Surgeon
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            City Hospital, Berhampore.
                    </p>
                </li>
            </ul>
            </div>
        </div>
}

export default DoctorAbout;