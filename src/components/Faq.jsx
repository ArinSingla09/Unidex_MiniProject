import {useState} from "react";
import Navbar from "./Navbar"

export default function Faq(){
    const [faqOpen, setFaqOpen] = useState(-1);
    return (
        <>
            <div className='w-screen h-screen bg-[url("./assets/Background_FAQ.png")] bg-cover overflow-y-scroll no-scrollbar'>
                <Navbar />
                <div className="w-full h-full flex flex-col items-center justify-around mt-[7%]">
                    <div className="w-[90%] h-[11.5%] rounded-2xl bg-[#D9D9D975] backdrop-blur-[3px] flex flex-col  items-center my-4 overflow-hidden">
                        {/* <div className="flex w-[95%] justify-between"><h1 className="text-3xl m-5 font-temp -ml-1">Can I access the budget tracker from multiple devices?</h1><h1 className="text-4xl m-5 font-temp">+</h1></div>
                        <p className="w-[95%] mx-9 my-2 font-temp1 text-xl">Yes, The Budget tracker can be accessed from multile device as it all depends on your Login Id and Password.</p> */}
                        <Accordion />
                    </div>
                    <div className="w-[90%] h-[11.5%] rounded-2xl bg-[#D9D9D975] backdrop-blur-[3px] flex flex-col  items-center my-4 overflow-hidden">
                        <div className="flex w-[95%] justify-between"><h1 className="text-4xl m-5 font-temp -ml-1">Is there a mobile app available for the budget tracker?</h1><h1 className="text-4xl m-5 font-temp">+</h1></div>
                        <p className="w-[95%] mx-9 my-2 font-temp1 text-xl">Not yet!</p>
                    </div>
                    <div className="w-[90%] h-[11.5%] rounded-2xl bg-[#D9D9D975] backdrop-blur-[3px] flex flex-col  items-center my-4 overflow-hidden">
                        <div className="flex w-[95%] justify-between"><h1 className="text-4xl m-5 font-temp -ml-1">Is there a way to categorize or organize tasks in the to-do list?</h1><h1 className="text-4xl m-5 font-temp">+</h1></div>
                        <p className="w-[95%] mx-9 my-2 font-temp1 text-xl">Yes, you can do it!!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
const faqData = [
    {
        que:"Can I access the budget tracker from multiple devices?",
        ans:"Yes, The Budget tracker can be accessed from multile device as it all depends on your Login Id and Password."
    },
    {
        que:"Que2",
        ans:"ans2"
    },
    {
        que:"Que3",
        ans:"ans3"
    }
]

function Accordion({que,ans,faqOpen,setFaqOpen,id}){
    return <>
    <div className={`w-[90%] ${faqOpen === id ? "h-[30%]" : "h-[11.5%]"} rounded-2xl bg-[#D9D9D975] backdrop-blur-[3px] flex flex-col  items-center my-4 overflow-hidden transition-all duration-300 ease-linear`} 
    onClick={() => {if(faqOpen !== id){
        setFaqOpen(id)
    }
    else{
        setFaqOpen(-1)
    }}}>
        <div className="flex w-[95%] justify-between"><h1 className="text-3xl m-5 font-temp -ml-1">{que}</h1><h1 className="text-4xl m-5 font-temp">+</h1></div>
        <p className="w-[95%] mx-9 my-2 font-temp1 text-xl">{ans}</p>
    </div></>
}