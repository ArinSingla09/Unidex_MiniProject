import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
export default function Login(){

    const [Username,setUsername]=useState('')
    const [Password,SetPassword] = useState('');
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:27017/Unidex.Unidex/",{
                Username,Password
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
            <form action="POST" className="w-[29%] h-[70%] mb-[6%] flex flex-col justify-around items-center rounded-2xl bg-[#D9D9D975] backdrop-blur-[1px]">
                <h1 className="font-temp2 text-3xl">Login</h1>
                <div className="flex">
                    <input type="text" onchange={
                        (e)=>{setUsername(e.target.value)}} placeholder="Username" required className="w-[150%] h-7 p-3 py-5 mr-5" /><FaUser size={40}/>
                </div>
                <div className="flex">
                    <input type="Password" onchange={
                        (e)=>{setPassword(e.target.value)}}placeholder="Password" required className="w-[150%] h-7 p-3 py-5 mr-5" /><FaLock size={40}/>
                </div>
                <div className="w-[60%] flex justify-between">
                    <label className="text-sm"><input type="checkbox"  />Remember me</label> 
                    <a href="#" className="text-sm">Forgot Password?</a>
                </div>
                <button type="submit" onClick={submit} className=" w-24 h-10 bg-white">Login</button>
                <div>
                    <p>Don't have an account?<a href="/signup">Sign up</a></p>
                </div>
            </form>
        </div>
    )
}