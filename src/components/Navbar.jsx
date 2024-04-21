import { useEffect, useState } from "react";
import Logo from "../assets/UniDexlogo.png"
import Profile from "../assets/profile.svg"
export default function Navbar() {
    const [activeTab, setActiveTab] = useState("");
    useEffect(() => {
        const currentURL = window.location.href;
        const lastPart = currentURL.split("/");
        console.log(lastPart[lastPart.length - 1]);
        setActiveTab(lastPart[lastPart.length - 1]);
    },[])
    return(
        <div className='bg-[#172c34a9] w-full h-[13%] flex items-center justify-around fixed z-40'>
            <img src={Logo} alt="" className="w-10"/>
            <a href="/" className="w-[10%] h-[50%] rounded-3xl hover:bg-[#e76f51] hover:scale-125"><p className="font-temp text-white text-center text-xl mt-2">Home</p></a>
            <a href="/budget-tracker" className={`${activeTab === "budget-tracker" ? "bg-[#e76f51] scale-125" : ""} w-[10%] h-[50%] rounded-3xl font-temp text-center text-white text-xl hover:bg-[#e76f51] hover:scale-125`}><p className="font-temp text-white text-center text-xl mt-2">Budget Tracker</p></a>
            <a href="/todo-list" className={`${activeTab === "todo-list" ? "bg-[#e76f51] scale-125" : ""} w-[10%] h-[50%] rounded-3xl font-temp text-center text-white text-xl hover:bg-[#e76f51] hover:scale-125`}><p className="font-temp text-white text-center text-xl mt-2">ToDo List</p></a>
            <a href="/faqs" className={`${activeTab === "faqs" ? "bg-[#e76f51] scale-125" : ""} w-[10%] h-[50%] rounded-3xl font-temp text-center text-white text-xl hover:bg-[#e76f51] hover:scale-125`}><p className="font-temp text-white text-center text-xl mt-2">FAQ's</p></a>
            <a href="/about-us" className={`${activeTab === "about-us" ? "bg-[#e76f51] scale-125" : ""} w-[10%] h-[50%] rounded-3xl font-temp text-center text-white text-xl hover:bg-[#e76f51] hover:scale-125`}><p className="font-temp text-white text-center text-xl mt-2">About Us</p></a>
            <img src={Profile} alt="" className="p-4 rounded-full" />
        </div>
    );
}