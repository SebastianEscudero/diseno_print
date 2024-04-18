import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AboutUs = () => {
    return ( 
        <div className="my-40">
            <h1 className="text-center text-7xl font-cursive mb-12">Preguntas Frecuentes</h1>
            <Accordion type="single" collapsible className="sm:text-3xl text-2xl xl:mx-[10%] lg:mx-[7%] md:mx-[5%] mx-[5%] space-y-9">
                <AccordionItem value="item-1" className="px-4">
                    <AccordionTrigger className="font-semibold border-b border-black">¿Donde están ubicados?</AccordionTrigger>
                    <AccordionContent className="flex flex-col w-full gap-1 text-2xl">
                        <p>Diseñoprintchicureo es tienda online, no es tienda fisica.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="px-4">
                    <AccordionTrigger className="font-semibold border-b border-black">¿Donde entregan?</AccordionTrigger>
                    <AccordionContent className="flex flex-col w-full gap-1 text-2xl">
                        <p>Las entregas son por deliver y a domicilio valor de la entrega desde los $3.000.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="px-4">
                    <AccordionTrigger className="font-semibold border-b border-black">¿Cómo envío los archivos?</AccordionTrigger>
                    <AccordionContent className="flex flex-col w-full gap-1 text-2xl">
                        <p>Los archivos los puedes enviar en Pdf, Adobe Ilustrator, Jpg, Png. Por mail <a className="text-blue-700" href="mailto:printchicureo@gmail.com">printchicureo@gmail.com</a> </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="px-4">
                    <AccordionTrigger className="font-semibold border-b border-black">¿Cuanto demoran en entregar?</AccordionTrigger>
                    <AccordionContent className="flex flex-col w-full gap-1 text-2xl">
                        <p>Recepcionamos pedidos con 3 a 4 días hábiles de anticipación.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="px-4">
                    <AccordionTrigger className="font-semibold border-b border-black">¿Cómo comprar?</AccordionTrigger>
                    <AccordionContent className="flex flex-col w-full gap-1 text-2xl">
                        <p>Escribeme por Whatsapp o Instagram y dime que productos o servicios necesitas para poder ayudarte.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="px-4">
                    <AccordionTrigger className="font-semibold border-b border-black">¿Cuáles son los metodos de pago?</AccordionTrigger>
                    <AccordionContent className="flex flex-col w-full gap-1 text-2xl">
                        <p>Por el momento solamente con transferencias.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
     );
}

export default AboutUs;