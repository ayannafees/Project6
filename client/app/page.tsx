import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white px-16 pt-8 pb-12 mb-4">
            <h1 className="text-3xl mb-4 text-center">Welcome to Home Page</h1>
            <div className="flex flex-row justify-center mt-2">
              <Link href="/login" className="bg-red-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">Login</Link>
            </div>
        </div>
    </div>
  )
}
