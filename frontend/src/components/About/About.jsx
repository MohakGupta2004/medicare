import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from '../../assets/images/about-card.png'
const About= ()=>{
    return <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                    <div className="absolute z-20 bottom-3 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>
                {/* About content */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className="heading">Proud to be one of the nations best</h2>
                    <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam quia optio? Nesciunt, perspiciatis alias, fuga corrupti consectetur necessitatibus eaque qui doloremque inventore veritatis quam, nisi quae officiis in delectus.</p>
                    <p className="text-base mt-[30px]">our best what we care for Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit ipsam libero, fugit beatae quo velit eum possimus ea necessitatibus nemo molestiae autem aliquam dolore accusamus quibusdam soluta, sint unde?</p>

                    <Link to="/"><button className="btn">Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
}

export default About