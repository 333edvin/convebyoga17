import Image from "next/image";
import yogapng from '../../../public/images/yogapng.png'

export default function Contact() {
  return (
    <>
       <div className="bg-lime-900 text-white pt-20 pb-5  md:py-10 flex flex-col justify-center items-center">
        <div className="flex items-center">
        <Image src={yogapng} alt="yoga" className="w-24 md:w-52"/>
        <h2 className="text-2xl md:text-4xl font-bold">Contact</h2>
        </div>
        <div className="breadcrumbs text-sm ">
            <ul>
            <li><a>Home</a></li>
            <li><a>Contact</a></li>
        </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto p-4 md:p-8">
        <div className="relative">
          <iframe
            width="100%"
            height="100%"
            className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
            frameBorder={0}
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=London+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(0) contrast(1.2) opacity(0.6)' }}
            loading="lazy"
          />
        </div>
        <div>
          <form>
            <div className="bg-gray-100 py-6 md:py-12 px-4 md:px-8 rounded-lg shadow-lg">
              <div className="text-center mb-6 md:mb-12">
                <strong className="text-gray-500 uppercase">Get Started</strong>
                <h1 className="text-3xl md:text-4xl font-medium my-2">Get in Touch with Us</h1>
              </div>
              <div className="contact-form">
                <div className="mb-4">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={5}
                    placeholder="Send us your queries or feedback"
                    className="bg-white border-2 border-solid rounded py-2 px-3 placeholder-gray-500 w-full focus:border-indigo-300 transition-colors"
                  />
                </div>
                <div className="mb-4 flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your E-mail"
                    className="bg-white border-2 border-solid rounded py-2 px-3 placeholder-gray-500 w-full focus:border-indigo-300 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-lime-950 hover:bg-indigo-700 text-white border-2 border-solid border-lime-600 rounded py-2 px-4 transition-colors duration-300 mt-4 md:mt-0"
                  >
                    <i className="fab fa-telegram-plane"></i> Send
                  </button>
                </div>
              </div>
              <div className="md:flex md:justify-between text-center mt-6 md:mt-12 pt-6 border-t-2 border-solid">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <address>
                    <div className="font-bold mb-2">West Chicago, IL</div>
                    <span>
                      44 Shirley Ave.<br />
                      West Chicago, IL 60185
                    </span>
                  </address>
                </div>
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <address>
                    <div className="font-bold mb-2">Orlando, FL</div>
                    <span>
                      514 S. Magnolia St.<br />
                      Orlando, FL 32806
                    </span>
                  </address>
                </div>
                <div className="md:w-1/3">
                  <address>
                    <div className="font-bold mb-2">Honolulu, HI</div>
                    <span>
                      4 Goldfield Rd.<br />
                      Honolulu, HI 96815
                    </span>
                  </address>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
