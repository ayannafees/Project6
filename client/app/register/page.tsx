"use client"
import Link from "next/link";
import { Input } from "../components/Input";
import { useState } from "react";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

interface UserData {
    email: string;
    username: string;
    password: string;
    role: string; // Add role property
}

const defaultData: UserData = {email: "", username: "", password: "", role: "" };

const Register = () => {

    const [data, setData] = useState(defaultData);

    const onValueChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const onRegister = (e: any) => {
        e.preventDefault();
        if (!data.email || !data.username || !data.password || !data.role) {
            alert("Please fill all mandatory fields.");
        }
        // API Call with data including the role

        axios.post(`http://localhost:8000/api/auth/register`,{
            email:data.email,
            password:data.password,
            username:data.username,
            role:data.role
        })
        .then((response)=>{
            alert(`user created with username ${response.data.user.username}`)
            console.log(response);
            localStorage.setItem("token",response.data.user.token);
            
        })


        console.log("Data to be sent to API:", data);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white px-16 pt-8 pb-12 mb-4">
                <h1 className="text-3xl mb-4 text-center">Register</h1>
                <form onSubmit={onRegister}>
                    <Input
                        label="Email"
                        id="email"
                        type="text"
                        value={data.email}
                        onChange={onValueChange}
                    />
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
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={data.role}
                            onChange={onValueChange}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="">Select Role</option>
                            <option value="youtuber">youtuber</option>
                            <option value="editor">editor</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full">
                        Submit
                    </button>
                    <p>
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
