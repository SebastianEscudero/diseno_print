import { Star } from "lucide-react";
import Image from "next/image"

interface BlogLinksProps {
    blogImage: string;
    blogDescription: string;
}

export const Testimonio = ({
    blogImage,
    blogDescription,
}: BlogLinksProps) => {
    return(
        <div className="flex flex-col w-auto border border-zinc-400 rounded-md mb-5 hover:border-black">
            <Image 
                className="rounded-md w-full sm:h-[400px] h-[250px]"
                src={blogImage}
                alt="Blog Image"
                width={1920}
                height={1080}
            />
            <div className="flex-1 flex flex-col justify-between p-5 bg-[#FFF] rounded-md">
                <div>
                    <div className="flex mb-2">
                        <Star fill="#EAB308"/>
                        <Star fill="#EAB308"/>
                        <Star fill="#EAB308"/>
                        <Star fill="#EAB308"/>
                        <Star fill="#EAB308"/>
                    </div>
                    <p>
                        {blogDescription}
                    </p>
                </div>
            </div>
        </div>
    )
}