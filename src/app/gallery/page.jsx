import Image from "next/image";
import photo1 from '../../../public/images/sarwangasana.jpg';
import photo2 from '../../../public/images/uttanasana.jpg';
import CTASection from "../components/CTASection";
import yogapng from '../../../public/images/yogapng.png'

export default function Gallery() {
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
      title: "Sarwangasana"
    },
    {
      id:4,
      image: photo2,
      title: "Uttanasana"
    },
    {
      id:5,
      image: photo1,
      title: "Uttanasana"
    },
    {
      id:6,
      image: photo2,
      title: "Uttanasana"
    },
    {
      id:7,
      image: photo2,
      title: "Uttanasana"
    },
    {
      id:8,
      image: photo2,
      title: "Uttanasana"
    },
    {
      id:9,
      image: photo2,
      title: "Uttanasana"
    },
  ];

  return (
    <>
      <div className="bg-lime-900 text-white pt-20 pb-5  md:py-10 flex flex-col justify-center items-center">
        <div className="flex items-center">
        <Image src={yogapng} alt="yoga" className="w-24 md:w-52"/>
        <h2 className="text-2xl md:text-4xl font-bold">Gallery</h2>
        </div>
        <div className="breadcrumbs text-sm ">
            <ul>
            <li><a>Home</a></li>
            <li><a>Gallery</a></li>
        </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto p-4 md:p-8">
        {services.map((serv, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg">
            <Image
              src={serv.image}
              alt={serv.title}
              className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
            />
          </div>
        ))}
      </div>
      <CTASection />
    </>
  );
}
