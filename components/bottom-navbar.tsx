"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const BotNavbar = () => {
    const pathname = usePathname();
    return (
        <footer className="bg-[#1C1C1E] text-white">
            <div className="py-10">
                <div className="text-center mt-10 xl:mx-[25%] lg:mx-[20%] md:mx-[15%] mx-[5%]">
                    <h2 className="mb-10 text-4xl md:text-5xl lg:text-6xl">
                        Escríbeme hoy mismo para dar vida a tus ideas.
                    </h2>
                    <span className="space-x-3">
                        <Link href="https://www.instagram.com/disenoprintchicureo/">
                            <Button variant="instagram" className="md:text-lg p-4 md:p-6">
                                Instagram <FaInstagram className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                        <Link href="http://api.whatsapp.com/send?phone=56988298224">
                            <Button variant="whatsapp" className="md:text-lg p-4 md:p-6">
                                Whatsapp <FaWhatsapp className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="flex md:text-left text-center md:space-y-0 space-y-5 md:flex-row flex-col xl:mx-[15%] mx-[10%] text-xl justify-between pb-10 pt-10 md:space-x-4">
                <ul className="space-y-2">
                    <li className="font-semibold mb-2 text-2xl underline">Horario de atención</li>
                    <li>Lunes a Viernes 9:00 a 19:00</li>
                    <li>Sábado cerrado</li>
                    <li>Domingo cerrado</li>
                    <li>Festivos cerrado</li>
                </ul>
                <ul className="space-y-3">
                    <li>
                        <Link
                            className="text-xl hover:underline"
                            href="/about-us"
                        >
                            <Button
                                className='text-xl font-semibold'
                                variant={pathname === "/about-us" ? 'secondary' : 'ghostDark'}
                            >
                                ¿Quienés somos?
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-xl hover:underline"
                            href="/faq"
                        >
                            <Button
                                className='text-xl font-semibold'
                                variant={pathname === "/faq" ? 'secondary' : 'ghostDark'}
                            >
                                Preguntas frecuentes
                            </Button>
                        </Link>
                    </li>
                </ul>
                <div className="flex flex-col md:justify-start pt-4">
                    <div className="flex flex-row md:justify-start items-center justify-center">
                        <Image
                            src="/logo.png"
                            width={50}
                            height={50}
                            alt="Logo"
                        />
                        <p className="ml-1">
                            Diseño Print Chicureo
                        </p>
                    </div>
                    <p className="ml-2 mt-3">
                        Printchicureo@gmail.com
                    </p>
                    <p className="ml-2 mt-3">
                        © 2024. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}