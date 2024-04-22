import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
    title: "PortFolio",
    description: "Portfolio Brayan Fernandez",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${urbanist.className} bg-black text-white`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
