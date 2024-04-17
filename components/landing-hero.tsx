"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button"
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

export const LandingHero = () => {    
    return (
        <div className="text-[#1c1c1e] pt-16 flex flex-col md:flex-row md:space-x-10 xl:space-x-28 xl:mx-[15%] lg:mx-[10%] md:mx-[8%] mx-[5%] items-center md:text-left text-center">
            <div className="space-y-5 flex-1 text-6xl xl:text-7xl 2xl:text-8xl md:mb-0 mb-5">
                <h1 className="font-cursive">
                    Tus ideas las imprimo
                </h1>
                <p className="text-lg text-zinc-800 mx-auto">
                    Hola! Soy la Ale! Mamá emprendedora y Diseñadora Gráfica de Impresiones, Estampados y Regalos Personalizados.
                </p>
                <span className="space-x-3">
                    <Link href="https://www.instagram.com/disenoprintchicureo/">
                        <Button variant="instagram" className="md:text-lg p-4 md:p-6">
                            Instagram <FaInstagram className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                    <Link href = "http://api.whatsapp.com/send?phone=56988298224">
                        <Button variant="whatsapp" className="md:text-lg p-4 md:p-6">
                            Whatsapp <FaWhatsapp className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                </span>
                <div className="flex sm:flex-row flex-col md:space-y-0 space-y-3 items-center space-x-4 mt-6 md:justify-start justify-center">
                    <div className="flex space-x-1">
                        <Avatar>
                            <AvatarImage src="/clientes/cliente1.jpg" />
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/clientes/cliente2.jpg" />
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/clientes/cliente3.jpg" />
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/clientes/cliente4.jpg" />
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/clientes/cliente5.jpg" />
                        </Avatar>
                    </div>
                    <div className="text-right">
                        <div className="flex justify-end">
                            <Star fill="#EAB308"/>
                            <Star fill="#EAB308"/>
                            <Star fill="#EAB308"/>
                            <Star fill="#EAB308"/>
                            <Star fill="#EAB308"/>
                        </div>
                        <p className="text-sm whitespace-nowrap">+100 clientes felices</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full rounded-sm md:block hidden">
                <Image
                    src="/landing-image.jpg"
                    alt="Logo"
                    className="w-full"
                    width={1920}
                    height={1080}
                />
            </div>
        </div>
    )
}