import Image from "next/image";
import trainer from '../../../public/images/face5.jpg';
import { PiInstagramLogoFill } from "react-icons/pi";
import Link from "next/link";
import Reveal from "../components/framermotion/RevealingAnim";
export default function AboutSection() {
    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto py-20 bg-slate-100 px-5 md:px-20">
                <div className="flex justify-center items-center mb-10 md:mb-0 z-10">
                    <Reveal>
                    <Image src={trainer} alt="trainer" className="w-64 h-64 md:w-96 md:h-96 object-cover "/>
                    </Reveal>
                </div>
                <div className="flex flex-col justify-center items-start md:items-start gap-3 z-10">
                    <h2 className="font-bold text-2xl md:text-3xl">Grace Hill</h2>
                    <p className="text-sm md:text-base text-gray-700">
                    Welcome to my yoga community! I'm Grace Hill, founder and instructor. I'm passionate about helping others discover the transformative power of yoga. My teaching style is a blend of traditional principles and modern insights, tailored to nourish your body, mind, and soul. With years of experience and a compassionate approach, I'll guide you on a journey of self-discovery and growth. Join me, and let's explore the beauty of yoga together.
                    </p>
                    <Link href="/">
                   <PiInstagramLogoFill className="text-3xl text-lime-950"/>
                    </Link>
                </div>
            </div>
            <div className="absolute right-12 bottom-0 md:right-20 md:top-14 z-0">
                <Image src="/images/mandala.png" width={300} height={300} alt="logo" />
            </div>
        </div>
    );
}
