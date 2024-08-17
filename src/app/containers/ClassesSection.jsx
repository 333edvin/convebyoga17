import Image from "next/image";
import sarwangasana from '../../../public/images/sarwangasana.jpg';
import uttanasana from '../../../public/images/uttanasana.jpg';
import face5 from '../../../public/images/face5.jpg';
import face3 from '../../../public/images/face3.jpg';
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Slide from "../components/framermotion/SlidingAnim";

const services = [
    {
        id:1,
        title: "Sarwangasana",
        image: sarwangasana,
    },
    {
        id:2,
        title: "Uttanasana",
        image: uttanasana,
    },
    {
        id:3,
        title: "Virabhadrasana",
        image: face5,
    },
    {
        id:4,
        title: "Vrksasana",
        image: uttanasana,
    },
    {
        id:5,
        title: "Bhujangasana",
        image: face3,
    },
    {
        id:6,
        title: "Trikonasana",
        image: uttanasana,
    },
];

export default function ClassesSection() {
    return (
        <div className="px-5 md:px-32 my-10">
            <div className="flex items-center justify-between gap-5 mb-5">
                <h3 className="text-2xl">Aasanas</h3>
                <Slide>
                <Link href='/asanas'>
                <button className="btn bg-lime-950 text-white rounded-none px-4 py-2">View More <FaCircleArrowRight/></button>
                </Link>
                </Slide>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mx-auto text-white">
                {
                    services.map((serv) => (
                        <div key={serv.id} className="relative hover:scale-105 duration-300 overflow-hidden ">
                            <Image src={serv.image} alt={serv.title} className="w-full h-48 sm:h-72 md:h-96 object-cover"/>
                            <div className="absolute top-0  md:top-5 p-3 w-full bg-black/30">
                                <h3 className="text-sm md:text-base">{serv.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
