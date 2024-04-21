import Navbar from "./Navbar";
import { FaInstagram, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
function About(){
    return (
        <>
        <div className=' w-screen h-screen bg-[url("./assets/Background_about.jpg")] bg-cover overflow-y-scroll no-scrollbar'>
            <Navbar />
            <div className="w-full h-full flex flex-col items-center justify-around mt-[7%]">
                <div className="w-[90%] h-[35%] rounded-2xl bg-[#D9D9D975] backdrop-blur-[3px] flex flex-col my-4">
                    <h1 className="text-4xl m-5 font-temp">Overview</h1>
                    <p className="mx-6 my-2 font-temp1 text-xl">Welcome to our student-focused budget and productivity platform, designed to empower students to manage their finances and academic responsibilities effectively. Our site is tailored specifically to address the unique needs and challenges faced by students as they navigate their academic journey.</p>
                </div>
                <div className="w-[90%] h-[30%] rounded-2xl bg-[#D9D9D975] backdrop-blur-[3px] flex flex-col my-4">
                    <h1 className="text-4xl m-5 font-temp">Contact Us</h1>
                    <p className="mx-6 my-2 font-temp1 text-xl flex justify-between">
                        Mobile No:- +91 99305XXXXX
                        <p>
                            Toll Free No:- 1800 2020 3456
                        </p>
                    </p>
                    <p className="mx-6 my-2 font-temp1 text-xl">
                        Email ID:- unidexhelp700@gmail.com
                    </p>
                </div>
                <div className="w-[90%] h-[30%] rounded-2xl bg-[#D9D9D975] backdrop-blur-[3px] flex flex-col my-4">
                    <h1 className="text-4xl m-5 font-temp">Our Socials</h1>
                    <p className="mx-6 my-3 font-temp1 text-xl flex justify-evenly items-center">
                        <h1 className="flex items-center text-2xl"><FaInstagram size={40} />@uniDex700</h1>
                        <h1 className="flex items-center text-2xl"><FaLinkedinIn size={38}/>UniDex.com</h1>
                        <h1 className="flex items-center text-2xl"><FaSquareXTwitter size={38} />UniDex.com</h1>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default About