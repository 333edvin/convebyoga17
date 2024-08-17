import Image from "next/image";
import trainer from '../../../public/images/face5.jpg'
import CTASection from "../components/CTASection";
import AboutSection from "../containers/AboutSection";
import TableSection from "../containers/TableSection";
import yogapng from '../../../public/images/yogapng.png'
export default function About(){
    const trainers = [
        {
            name:"Name1",
            image:trainer
        },
        {
            name:"Name1",
            image:trainer
        },
        {
            name:"Name1",
            image:trainer
        },
    ]
    return(
        <>
       <div className="bg-lime-900 text-white pt-20 pb-5  md:py-10 flex flex-col justify-center items-center">
        <div className="flex items-center">
        <Image src={yogapng} alt="yoga" className="w-24 md:w-52"/>
        <h2 className="text-2xl md:text-4xl font-bold">About Us</h2>
        </div>
        <div className="breadcrumbs text-sm ">
            <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
        </ul>
        </div>
      </div>
        <AboutSection/>


        <div className="px-5 md:px-20">
            <h2 className="text-center my-10">TRAINERS</h2>


        <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-4">
            {
                trainers.map((train,index)=>(
                    <div className="relative flex flex-col justify-center items-center " key={index}>
                        <Image src={train.image} alt={train.name} className="w-full h-auto object-cover" />
                        <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white p-3 ">
                            {train.name}
                        </div>
                    </div>
                ))
            }
            
        </div>

        </div>
        <TableSection/>
        <CTASection/>
        </>
    )
}