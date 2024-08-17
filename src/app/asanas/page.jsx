import Image from "next/image";
import photo1 from '../../../public/images/sarwangasana.jpg';
import photo2 from '../../../public/images/uttanasana.jpg';
import CTASection from "../components/CTASection";
import TreatmentSection from "../containers/TreatmentSection";
import yogapng from '../../../public/images/yogapng.png'

export default function Asanas() {
  const services = [
    {
      id:1,
      image: photo1,
      title: "Sarwangasana"
    },
    {
      id:2,
      image: photo2,
      title: "Uttanasana"
    },
    {
      id:3,
      image: photo1,
      title: "Virabhadrasana"
    },
    {
      id:4,
      image: photo2,
      title: "Vrksasana"
    },
    {
      id:5,
      image: photo1,
      title: "Bhujangasana"
    },
    {
      id:6,
      image: photo2,
      title: "Trikonasana"
    },
    {
      id:7,
      image: photo2,
      title: "Balasana"
    },
    {
      id:8,
      image: photo2,
      title: "Bharadvajasana"
    },
    {
      id:9,
      image: photo2,
      title: "Tadasana"
    },
  ];

  return (
    <>
      <div className="bg-lime-900 text-white pt-20 pb-5  md:py-10 flex flex-col justify-center items-center">
        <div className="flex items-center">
        <Image src={yogapng} alt="yoga" className="w-24 md:w-52"/>
        <h2 className="text-2xl md:text-4xl font-bold">Aasanas</h2>
        </div>
        <div className="breadcrumbs text-sm ">
            <ul>
            <li><a>Home</a></li>
            <li><a>Aasanas</a></li>
        </ul>
        </div>
      </div>

      <TreatmentSection/>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto p-4 md:px-32 md:my-20  text-white ">
        {services.map((serv) => (
          <div
            key={serv.id}
            className="relative overflow-hidden  shadow-lg hover:scale-105 transition-transform duration-300 "
          >
            <Image
              src={serv.image}
              alt={serv.title}
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover "
            />
            <div className="absolute top-0 w-full p-2 md:p-3  bg-black/50">
              <h3 className="text-sm md:text-lg">{serv.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <CTASection />
    </>
  );
}
