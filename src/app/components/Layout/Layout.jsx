'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Layout({ children }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  let lastScrollY = 0;

  const controlNavbar = () => {
    setScrolling(true);
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    const handleScroll = () => {
      controlNavbar();
      setTimeout(() => {
        setScrolling(false);
      }, 150); // Adjust the delay as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
    return (
      <>
       <header className="">
       <motion.nav
      initial={{ y: 0 }}
      animate={{ y: scrolling ? -100 : 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
       <div className="navbar fixed top-0 left-0 w-full z-50  bg-lime-950 px-5 md:px-10">
  <div className="navbar-start">

  <div className="drawer z-30">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content w-10 ">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" bg-transparent drawer-button border-none cursor-pointer">
    <svg
          xmlns="http://www.w3.org/4000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-white text-black min-h-full w-52 md:w-80 p-4">
        <h2 className="text-center font-bold text-3xl">YOGA</h2>
      {/* Sidebar content here */}
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/asanas">Aasana</Link></li>
      <li><Link href="/gallery">Gallery</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </div>
</div>
    
  </div>
  <div className="navbar-center">
    <p className=" text-white text-xl">YOGA</p>
  </div>
  <div className="navbar-end">
    <Link href="/contact" className="flex justify-center items-center gap-3 text-white">
    <button className="btn btn-ghost btn-circle text-white ">
       Contact 
    </button>
    <FaCircleArrowRight/>
    </Link>
  </div>
</div>
</motion.nav>
        </header>

          <main>{children}</main>

          <footer className="footer  bg-lime-950 text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 
</footer>
        </>
        
       
    );
  }
  