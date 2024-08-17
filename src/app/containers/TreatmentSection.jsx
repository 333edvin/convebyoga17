import Image from "next/image";
import Reveal from "../components/framermotion/RevealingAnim";

export default function TreatmentSection() {
    return (
        <div className="px-5 md:px-32  bg-slate-100 py-10">
            <p className="text-center text-xl md:text-2xl font-semibold">Treatments</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto my-10">
                <div className="flex flex-col justify-center items-end gap-5">
                    <Reveal>
                    <div className="p-3 border  bg-white shadow-sm">
                        <h3 className="text-base md:text-lg font-bold">Yoga Therapy</h3>
                        <p className="text-sm md:text-base text-gray-600">
                        A holistic approach using yoga postures, breathing techniques, and meditation to promote physical, mental, and emotional healing.
                        </p>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className="p-3 border  bg-white shadow-sm">
                        <h3 className="text-base md:text-lg font-bold">Electrotherapy</h3>
                        <p className="text-sm md:text-base text-gray-600">
                        A non-invasive treatment using electrical currents to stimulate muscles, relieve pain, and improve circulation.
                        </p>
                    </div>
                    </Reveal>
                </div>

                <div className="flex justify-center my-5 md:my-0">
                    <Image src="/images/hero-pose.png" alt="hero" width={300} height={400} className="w-48 h-auto md:w-72"/>
                </div>

                <div className="flex flex-col justify-center items-start gap-5">
                <Reveal>
                    <div className="p-3 border  bg-white shadow-sm">
                        <h3 className="text-base md:text-lg font-bold">Acupressure</h3>
                        <p className="text-sm md:text-base text-gray-600">
                        An ancient technique applying pressure to specific points on the body to balance energy, relieve tension, and promote well-being.

                        </p>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className="p-3 border  bg-white shadow-sm">
                        <h3 className="text-base md:text-lg font-bold">Chakra Healing & Meditation</h3>
                        <p className="text-sm md:text-base text-gray-600">
                        A spiritual practice focusing on the body&apos;s energy centers (chakras) to restore balance, harmony, and vitality.
                        </p>
                    </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
