"use client"
import Link from "next/link";
import { Input } from "../components/Input";
import { useState } from "react";

interface UserData {
    username: string;
    password: string;
  }
  
  const defaultData: UserData = { username: "", password: "" };
  

const Login = () => {
    const [data,setData] = useState(defaultData);

    const onValueChange = (e:any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onLogin = (e:any) => {
        e.preventDefault();
        if(!data.username || !data.password){
            alert("Please fill all mandatory fields.")
        }
        //API Call
    }

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white px-16 pt-8 pb-12 mb-4">
            <h1 className="text-3xl mb-4 text-center">Login</h1>
            <form onSubmit={onLogin}>
                <Input
                    label="Username"
                    id="username"
                    type="text"
                    value={data.username}
                    onChange={onValueChange}
                />
                <Input 
                    label="Password"
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={onValueChange}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full ">Submit</button>
                <p>
                    Don't have an account?
                    <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                </p>
            </form>
        </div>
      </div>
    )
  }
  export default Login;