"use client"
import Link from "next/link"
import Image from "next/image"
import about from "/public/icons/about.png"
import course from "/public/icons/course.png"
import exit from "/public/icons/exit.png"
import apps from "/public/icons/apps.png"
import register from "/public/icons/register.png"
import close from "/public/icons/close.png"
import logo from "/public/icons/logo.png"
import profile from "/public/icons/profile.png"


const SideBar = ({isOpen, toggleSidebar}) => {

    return (
        
        <div className={`z-20 ${isOpen ? 'block' : 'hidden'} bg-white fixed xl:static xl:block flex-col justify-center w-full md:w-80 py-2 px-5 h-screen`}>
            <div className="flex flex-row items-center gap-3 text-sm p-3 mb-10 sm:relative">
                <Image src={logo} width={25} height={15} alt="logo"/>
                <p className="font-bold text-lg">Sisempen</p>
                {/* button close sidebar */}
                <button className="xl:hidden block absolute right-4" onClick={toggleSidebar}>
                    <Image src={close} width={20} height={50} className="" alt=""/>
                </button>
            </div>

            <div className="xl:hidden flex flex-row items-center p-1 gap-2 rounded border-2 bg-gray-100 border-gray-200">
                <div className="w-10 h-10 rounded-full flex justify-center">
                    <Image src={profile} width={50} height={50} className="object-cover" alt="P" />
                </div>
                <div className="flex flex-col">
                    <p className="text-xs font-bold">Hamdun Muzadi</p>
                    <p className="text-xs overflow-hidden">a2.2000118@mhs.stmik-sumedang.ac.id</p>
                </div>
            </div>
            
            <ul className="mt-8 text-sm text-gray-600 text-color-secondary">
                {/* <p className="mb-2">Main Menu</p> */}
                <Link href="/Mahasiswa">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <Image src={apps} width={20} height={15} alt="Dashboard"/>
                        Dashboard
                    </li>
                </Link>
                <Link href="/Mahasiswa/Register">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <Image src={register} width={20} height={15} alt="Register"/>
                        Register
                    </li>
                </Link>
                <Link href="/Mahasiswa/Course">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2">
                        <Image src={course} width={20} height={15} alt="Course"/>
                        Course
                    </li>
                </Link>
            </ul>
            <ul className="text-sm text-gray-600 text-color-secondary">
                {/* <p className="mb-2">General</p> */}
                <Link href="/Mahasiswa/Informasi">
                    <li className="flex gap-4 items-center py-5  p-4 rounded mb-2 cursor-pointer">
                        <Image src={about} width={20} height={15} alt="About"/>
                        Information
                    </li>
                </Link>
                <li className="flex gap-4 items-center py-5  p-4 rounded mb-2 cursor-pointer">
                    <Image src={exit} width={20} height={15} alt="Exit"/>
                    Log Out
                </li>
            </ul>

        </div>
    )
}

export default SideBar