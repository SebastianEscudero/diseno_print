"use client";

import { BlogSection } from "./blog-section";
import { Testimonio } from "./testimonio";

export const LandingContent = () => {
    return (
        <div>
            <div id="about" className="md:my-14 lg:my-16 my-10">
                <BlogSection
                    title="Diseño, Estampados, Imprimesiones, lo que tu necesites."
                />
            </div>
            <BlogSection 
                title="Estampados" 
                text="Estampados de Productos para Regalos de todo tipo. Tazones, Mug térmicos, Llaveros, Tazones Lanyard , Morrales y más. Cada producto se realiza de forma personalizada con las imagenes, diseños fotos que necesites."
                img="/estampo.jpg"
                side="right"
            />
            <BlogSection 
                title="Diseño"
                text="Diseño desde el logo de tu emprendimiemto hasta las piezas gráficas para tú contenido en Redes sociales. Desarrollo y asesoría en todo el proceso, trabajo de forma personalizada de acuerdo a cada emprendedora y sus requerimientos."
                img="/diseno.jpg"
                side="right"
            />
            <BlogSection 
                title="Impresiones"
                text="Impresiones de todo tipo. Para emprendedoras y clientas que necesiten impresiones de calidad. Tarjetas, Stickers, Etiquetas, Flyers , Cuadros QR, Gift Card, Tags, Etiquetas adhesivas, Etiquetas para colgar, Imanes. Para Souvenirs y Recuerdos Babyshower, Bautizos, primera comunión Matrimonios , cumpleaños, aniversarios."
                text2="Para cotizaciones Favor enviar medidas alto y ancho. Y las cantidades para poder ayudarte. Los valores mencionados son por impresión y corte. ( no incluye diseño )"
                img="/diseno.jpg"
                side="right"
            />
            <div className="my-20 flex justify-center items-center">
                <h2 className="font-cursive text-6xl md:text-8xl text-center">Clientas felices</h2>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 xl:mx-[10%] lg:mx-[7%] md:mx-[5%] mx-[5%] gap-5 mb-12">
                <Testimonio blogImage="/clientes/cliente6.jpg" blogDescription="Gracias Ale por la puntualidad llegó todo super 😊!"/>
                <Testimonio blogImage="/clientes/cliente2.jpg" blogDescription="Gracias Ale por el diseño super puntual y la calidad super buena."/>
                <Testimonio blogImage="/clientes/cliente1.jpg" blogDescription="Super buena la Ale puntual y la calidad de las impresiones de lo mejor! 😍"/>
                <Testimonio blogImage="/clientes/cliente4.jpg" blogDescription="Te pasaste Ale gracias por toda tu ayuda el estampado salio buenisimo"/>
            </div>
        </div>
    )
}