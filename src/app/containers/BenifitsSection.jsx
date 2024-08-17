
import Image from 'next/image'
import icon from '../../../public/images/icon.jpg'
import Reveal from '../components/framermotion/RevealingAnim'

export default function BenefitsSection() {
    const benefits = [
        {   
            icons: icon,
            title: "Improves Flexibility",
            description: "Stretch, strengthen, and unlock your full potential."
        },
        {   
            icons: icon,
            title: "Improves Balance",
            description: "Find your center, find balance."
        },
        {   
            icons: icon,
            title: "Increases Strength",
            description: "Empower your body, empower your mind."
        },
        {   
            icons: icon,
            title: "Improves Posture",
            description: "Stand tall, live confident."
        },
        {   
            icons: icon,
            title: "Improves Lung Function",
            description: "Breathe deep, live full."
        },
        {   
            icons: icon,
            title: "Cultivates Mindfulness",
            description: "Connect within, calm begins."
        },
    ]
    return (
        <div className="md:p-10 my-10">
            <h2 className="text-center text-2xl font-semibold mb-6">Benefits Of Yoga</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
                {
                    benefits.map((b, index) => (
                        <Reveal key={index}>
                        <div  className="flex flex-col justify-center items-center border border-gray-200 rounded-2xl p-4 md:p-8 bg-white shadow-md">
                            <Image src={b.icons} alt={b.title} className="w-16 h-16 mb-4"/>
                            <h3 className="text-lg font-bold mb-2 text-center">{b.title}</h3>
                            <p className="text-center text-sm text-gray-600">{b.description}</p>
                        </div>
                        </Reveal>
                    ))
                }
            </div>
        </div>
    )
}
