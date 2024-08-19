
import Image from "next/image";
import banner from '../../../public/images/banner2.jpeg'
import face1 from '../../../public/images/face2.jpg'
import face2 from '../../../public/images/face1.jpg'
import face3 from '../../../public/images/face3.jpg'
import { Playfair_Display } from "next/font/google";



const playfairfont = Playfair_Display({ subsets: ["latin"] });

export default function Hero() {
 

    return (
        <div className="relative">
            <Image src={banner} alt="banner" className="w-fill h-screen object-cover" />
            <div className={`absolute bottom-20 left-5 md:top-52 md:left-32 space-y-5 text-white  ${playfairfont.className}`}>
                <h1 className="text-6xl md:text-9xl ">CALM <br/> YOUR SOUL.</h1>
                <p>Breathe deeply, and let calmness envelop your soul.</p>
                
                <div className="flex items-center gap-4">
  <div className="flex -space-x-5">
    <Image
      src={face1}
      alt="faces"
      className="w-10 h-10 object-cover rounded-full"
    />
    <Image
      src={face2}
      alt="faces"
      className="w-10 h-10 object-cover rounded-full"
    />
    <Image
      src={face3}
      alt="faces"
      className="w-10 h-10 object-cover rounded-full"
    />
  </div>
  <p className="text-sm">50 + People Joined</p>
</div>


            </div>
        </div>
    )
}
