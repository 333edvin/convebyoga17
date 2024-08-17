import Image from "next/image";
import banner from '../../../public/images/banner2.jpeg'
import { Playfair_Display } from "next/font/google";
const inter = Playfair_Display({ subsets: ["latin"] });
export default function Hero() {
    return (
        <div className="relative">
            <Image src={banner} alt="banner" className="w-fill h-screen object-cover" />
            <div className={`absolute top-2/3 left-5 md:top-52 md:left-32 space-y-5 text-white  ${inter.className}`}>
                <h1 className="text-6xl md:text-9xl ">CALM <br/> YOUR SOUL.</h1>
                <p className="mx-1">Breathe deeply, and let calmness envelop your soul.</p>
            </div>
        </div>
    )
}
