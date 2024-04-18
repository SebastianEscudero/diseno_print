import Image from "next/image";
import { cn } from '@/lib/utils';

interface BlogSectionProps {
    title: string;
    text?: string;
    text2?: string;
    img?: string;
    side?: 'left' | 'right';
}

export const BlogSection = ({
    title,
    text,
    text2,
    img,
    side = 'right',
}: BlogSectionProps) => {
    const imageElement = img && (
        <div className="flex-1 w-full border max-w-[450px] border-[#837D7C] rounded-md">
            <Image
                src={img}
                alt="Logo"
                className="w-full max-w-[450px] rounded-md"
                width={1920}
                height={1080}
            />
        </div>
    );

    return (
        <div className={`flex flex-col xl:mx-[15%] lg:mx-[10%] md:mx-[8%] mx-[5%] md:flex-row items-center my-14 md:space-x-20 xl:space-x-60 text-[#1c1c1e] ${!img && 'text-center'} ${side === 'left' && 'flex-col-reverse'}`}>
            {side === 'left' && imageElement}
            <div className="flex-1">
                <h2 className={cn("mb-10 leading-snug space-y-5 font-cursive", {
                    'text-5xl sm:text-6xl lg:text-7xl md:text-left text-center': text && img,
                    'text-5xl sm:text-6xl lg:text-7xl lg:mx-[20%] mx-[2%]': !img 
                })} style={{ lineHeight: "1.2" }}>
                    {title}
                </h2>
                {text && (
                    <p className={cn("text-2xl lg:text-2xl text-[#1c1c1e] md:mb-0 mb-5", {
                        'lg:mx-[20%] mx-[2%]': !img
                    })}>
                        {text}
                    </p>
                )}
                {text2 && (
                    <p className={cn("mt-5 text-2xl lg:text-2xl text-[#1c1c1e] md:mb-0 mb-5", {
                        'lg:mx-[20%] mx-[2%]': !img
                    })}>
                        {text2}
                    </p>
                )}
            </div>
            {side === 'right' && imageElement}
        </div>
    )
}