import { FaUser, FaLock } from "react-icons/fa";

export default function Login(){
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form action="" className="w-[29%] h-[70%] flex flex-col justify-around items-center">
                <h1 className="font-temp2 text-2xl">Login</h1>
                <div className="flex">
                    <input type="text" placeholder="Username" required className="w-[135%] h-8 p-3 py-5" /><FaUser size={40}/>
                </div>
                <div className="flex">
                    <input type="Password" placeholder="Password" required className="w-[135%] h-8 p-3 py-5" /><FaLock size={40}/>
                </div>
                <div>
                    <label className="text-sm"><input type="checkbox"  />Remember me</label> 
                    <a href="#" className="text-sm">Forgot Password</a>
                </div>
                <button type="submit">Login</button>
                <div>
                    <p>Don't have an account? <a href="/signup">SignUp</a></p>
                </div>
            </form>
        </div>
    )
}