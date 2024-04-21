import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate,Link } from "react-router-dom";

export default function Signup(){

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
        <div className='w-screen h-screen bg-[url("./assets/Background_home.png")] flex items-center justify-center bg-cover'>
            <form action="POST" className="w-[29%] h-[70%] flex flex-col justify-around items-center rounded-2xl bg-[#D9D9D975] backdrop-blur-[1px]">
                <h1 className="font-temp2 text-3xl">SignUp</h1>
                <div className="flex">
                    <input type="text" onchange={
                        (e)=>{SetEmail(e.target.value)}} placeholder="Username" required className="w-[150%] h-7 p-3 py-5 mr-5" /><FaUser size={40}/>
                </div>
                <div className="flex">
                    <input type="Password" onchange={
                        (e)=>{SetPassword(e.target.value)}}placeholder="Password" required className="w-[150%] h-7 p-3 py-5 mr-5" /><FaLock size={40}/>
                </div>
                <div className="w-[60%] flex justify-between">
                    <label className="text-sm"><input type="checkbox"  />Remember me</label> 
                    <a href="#" className="text-sm">Forgot Password?</a>
                </div>
                <button type="submit" onClick={submit} className=" w-24 h-10 bg-white">Login</button>
                <div>
                    <p>Don't have an account?<Link to="/signup">Sign up</Link></p>
                </div>
            </form>
        </div>
    )
}