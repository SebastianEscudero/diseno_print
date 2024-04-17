import { BotNavbar } from "@/components/bottom-navbar";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <main className= "font-sans bg-[#D7F0ED]">
            <div className="mx-auto h-full">
                <LandingNavbar />
                {children}
                <BotNavbar />
            </div>
        </main>
     );
}
 
export default LandingLayout;