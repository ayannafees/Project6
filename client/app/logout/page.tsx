"use client"
import Link from "next/link";
import { Input } from "../components/Input";

const Logout = () => {
    
    const onLogout = (e:any) => {
        e.preventDefault();
        //API Call
    }

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white px-16 pt-8 pb-12 mb-4">
            <h1 className="text-3xl mb-4 text-center">Welcome to Logout Page</h1>

            <button className="bg-red-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full mt-4" onClick={onLogout}>Logout</button>
        </div>
      </div>
    )
  }
  export default Logout;