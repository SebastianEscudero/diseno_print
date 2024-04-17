"use client";

import Image from "next/image";
import Link from "next/link";
import { NavigationMenuLanding } from "./navigation-menu";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "./ui/button";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const LandingNavbar = () => {
    return (
        <nav className="py-3 bg-[#FFFFFF] border-b sticky top-0 z-50">
            <div className="flex items-center justify-between xl:mx-[5%] lg:mx-[3%] md:mx-[2%] mx-[1%]">
                <div className="flex items-center">
                    <MobileSidebar />
                    <Link href="/" className="flex items-center mr-2 ml-2">
                        <div className="mr-4">
                            <Image
                                height={65}
                                width={65}
                                alt="Logo"
                                src="/logo.png"    
                            />
                        </div>
                        <p className="text-2xl font-bold text-[#38322C] font-cursive">
                            Diseño Print Chicureo
                        </p>
                    </Link>
                    <NavigationMenuLanding />
                </div>
                <div className="hidden sm:flex items-center gap-x-2">
                    <Link href="https://www.instagram.com/disenoprintchicureo/">
                        <Button variant="instagram" className="md:text-lg p-4 md:p-6">
                            <FaInstagram className="w-6 h-6"/>
                        </Button>
                    </Link>
                    <Link href = "http://api.whatsapp.com/send?phone=56988298224">
                        <Button variant="whatsapp" className="md:text-lg p-4 md:p-6">
                            <FaWhatsapp className="w-6 h-6"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}