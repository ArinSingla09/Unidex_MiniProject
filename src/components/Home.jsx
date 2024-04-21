import './home.css'
import BandE_photo from "../assets/BandE_icon.svg"
import ToDo_icon from "../assets/todo_icon.svg"
import FAQ_icon from "../assets/FAQ_icon.svg"
import Info_icon from "../assets/info.svg"
function Home(){
    return(
    <div className='w-screen h-screen bg-[url("./assets/Background_home.png")] bg-cover'>
        <nav className="w-full h-[10%]">
        <div className="float-right mt-2 w-[25%]">
            <a href="/login"><button className="p-2.5 w-[40%] text-white px-6 border-[#2A9D8F] border-2 rounded-3xl mr-4 hover:bg-[#2A9D8F] font-temp">Login</button></a>
            <a href="/signup"><button className="p-2.5 px-6 w-[40%] text-white bg-[#2A9D8F] border-[#2A9D8F] border-2  mr-4 rounded-3xl hover:bg-inherit font-temp">Sign Up</button></a>
        </div>
        </nav>
        <div className="overflow-y-hidden w-full h-[90%] flex justify-between items-center">
            <section className="w-[30%] h-[60%] ml-16">
                <svg class="logo" width="100" height="100" viewBox="0 0 369 554"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H94V234C81.6667 236.333 67 237 37.5 261C8 285 6 307.667 0 324.5V1Z" fill="#E7D1AC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M369 0.5H277.153C278.395 59.6757 277.691 155.211 277.106 239.125C276.976 236.391 277.41 233.971 277.153 232H94C94 232 63.0004 233 31.5005 265C0.000680923 297 0 333.5 0 333.5V388C0.833333 403 7.70001 440.6 28.5 471C54.5 509 108.5 554.5 184 553.5C259.5 552.5 311 513 339 471C361.4 437.4 368.333 401.667 369 388V0.5ZM267 285.5C272.263 275.594 276.284 263.344 277.009 251.765C276.436 319.85 275.146 375.661 273 388C263 445.5 202 459.5 184 459.5C166 459.5 98 446.5 98 388C98 341.2 134.667 327.167 153 326C167.167 327.167 212 323.5 218 323.5C236.5 323.5 258.5 301.5 267 285.5Z" fill="#F05A3F"/>
                        </svg>
                <h1 className="font-temp text-8xl text-[#D9D9D9] my-4 "><span className="text-[#e25c3a]">U</span>ni<span className="text-[#e25c3a]">D</span>ex</h1>
                <p class="text-3xl text-[#D9D9D9]"><span className="text-[#e25c3a]">A</span>ll Things Uni.<br /><span className="text-[#e25c3a]">A</span>ll in One Place.</p>
            </section>
            <section className="w-[50%] h-[63%] flex justify-between items-center flex-col">
                <p className='text-center text-4xl text-white mb-6'>How can we help you Today?</p>
                <div className='w-[80%] h-[90%] bg-[#D9D9D928] backdrop-blur-[3px] rounded-3xl'>
                    <div className='h-[40%] w-full flex mt-[3%] justify-evenly -ml-[70px]'>
                        <a href="/budget-tracker" className='group h-[110%] w-[16%] flex flex-col justify-center hover:scale-110'>
                            <div className='group-hover:bg-[#263947] bg-[#e76f51] rounded-2xl h-[65%] w-full '>
                            <img src={BandE_photo} alt="" className='w-[70%] ml-4 mt-3' /></div>
                            <p className="text-[13.5px] text-center text-white overflow-visible">Budget Tracker</p>
                        </a>
                        <a href="/todo-list" className='group h-[110%] w-[16%] flex flex-col justify-center hover:scale-110'>
                            <div className='group-hover:bg-[#263947] bg-[#e76f51] rounded-2xl h-[65%] w-full '>
                            <img src={ToDo_icon} alt="" className='w-[70%] ml-4 mt-3' /></div>
                            <p className="text-[13.5px] text-center text-white overflow-visible">ToDo List</p>
                        </a>
                    </div>
                    <div className='h-[40%] w-full flex mt-[3%] justify-evenly ml-14'>
                    <a href="/about-us" className='group h-[110%] w-[16%] flex flex-col justify-center hover:scale-110'>
                            <div className='group-hover:bg-[#263947] bg-[#e76f51] rounded-2xl h-[65%] w-full '>
                            <img src={Info_icon} alt="" className='w-[70%] ml-4 mt-3' /></div>
                            <p className="text-[13.5px] text-center text-white overflow-visible">About us</p>
                        </a>
                        <a href="/faqs" className='group h-[110%] w-[16%] flex flex-col justify-center hover:scale-110'>
                            <div className='group-hover:bg-[#263947] bg-[#e76f51] rounded-2xl h-[65%] w-full '>
                            <img src={FAQ_icon} alt="" className='w-[70%] ml-4 mt-3' /></div>
                            <p className="text-[13.5px] text-center text-white overflow-visible">FAQ's</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
    );
}
export default Home