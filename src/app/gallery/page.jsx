'use client'
import { useState } from "react";
import Image from "next/image";
import photo1 from '../../../public/images/sarwangasana.jpg';
import photo2 from '../../../public/images/uttanasana.jpg';
import CTASection from "../components/CTASection";
import yogapng from '../../../public/images/yogapng.png'
import { IoClose } from "react-icons/io5";
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (image) => {
    setSelectedImage(image);
    document.getElementById('my_modal_1').showModal();
  };

  return (
    <>
      <div className="bg-lime-900 text-white pt-20 pb-5 md:py-10 flex flex-col justify-center items-center">
        <div className="flex items-center">
          <Image src={yogapng} alt="yoga" className="w-24 md:w-52"/>
          <h2 className="text-2xl md:text-4xl font-bold">Gallery</h2>
        </div>
        <div className="breadcrumbs text-sm">
          <ul>
            <li><a>Home</a></li>
            <li><a>Gallery</a></li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto p-4 md:p-8">
        {services.map((serv, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg">
            <div className="text-black" onClick={() => openModal(serv.image)}>
              <Image
                src={serv.image}
                alt={serv.title}
                className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box p-0 rounded-none w-96 overflow-hidden">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Selected"
              className="w-96 h-auto object-cover"
            />
          )}
          <div className="modal-action absolute top-0 right-5">
            <form method="dialog">
              <button className="text-3xl text-white"><IoClose/></button>
            </form>
          </div>
        </div>
      </dialog>

      <CTASection />
    </>
  );
}
