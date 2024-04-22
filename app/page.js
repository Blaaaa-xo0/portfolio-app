"use client"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Figures } from "@/components/Particles";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            
            <div className="container mx-auto py-12 px-12">
                <Hero />
                <Figures />
            </div>
            
        </main>
    );
}
