import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaHome } from "react-icons/fa";


export default function Signup(){

    const [Name,SetName] = useState('');
    const [Number,SetNumber] = useState('');
    const [Email,setEmail]=useState('')
    const [Password,SetPassword] = useState('');
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:27017/Unidex.Unidex/signup",{
                Email,Password
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <div className='w-screen h-screen bg-[url("./assets/Background_home.png")] flex flex-col items-center justify-between bg-cover'>
            <nav className=" w-full h-[10%]">
                <a href="/"><FaHome size={55} className=" ml-4 mt-2"/></a>
            </nav>
            <form action="POST" className="w-[29%] h-[70%] flex flex-col justify-around items-center rounded-2xl bg-[#D9D9D975] backdrop-blur-[1px] mb-[6%]">
                <h1 className="font-temp2 text-3xl">SignUp</h1>
                <div className="flex">
                    <input type="text" onchange={
                        (e)=>{SetName(e.target.value)}} placeholder="Name" required className="w-[150%] h-7 p-3 py-5 mr-5" /><FaUser size={40}/>
                </div>
                <div className="flex">
                    <input type="Number" onchange={
                        (e)=>{SetNumber(e.target.value)}} placeholder="Phone Number" required min={0} className="w-[150%] h-7 p-3 py-5 mr-5" /><FaPhone size={40}/>
                </div>
                <div className="flex">
                    <input type="email" onchange={
                        (e)=>{SetEmail(e.target.value)}} placeholder="Email" required className="w-[150%] h-7 p-3 py-5 mr-5" /><IoMail size={40}/>
                </div>
                <div className="flex">
                    <input type="Password" onchange={
                        (e)=>{SetPassword(e.target.value)}}placeholder="Password" required className="w-[150%] h-7 p-3 py-5 mr-5" /><FaLock size={40}/>
                </div>
                <button type="submit" onClick={submit} className=" w-24 h-10 bg-white">Sign Up</button>
                <div>
                    <p>Have an account?<a href="/login">Login</a></p>
                </div>
            </form>
        </div>
    )
}