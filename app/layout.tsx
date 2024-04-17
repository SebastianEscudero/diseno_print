import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://www.disenoprintchicureo.cl"),
  title: "Diseño, Estampado, Impresiones | Diseño Print Chicureo",
  description: "Hola! Soy la Ale! Diseñadora Gráfica Impresiones /Estampados/ Regalos Personalizados Tienda ONLINE Tus Ideas! Las Imprimo. Papeleria CREATIVA X DM.",
  keywords: ["estampados chicureo", "impresiones chicureo", "diseño print chicureo", "diseño gráfico chicureo", "diseño gráfico", "impresiones", "estampados", "regalos personalizados", "tienda online", "diseño print"],
  alternates: {
    canonical: "http://www.disenoprintchicureo.cl",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/public/favicon/favicon.ico",
    apple: "/public/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
