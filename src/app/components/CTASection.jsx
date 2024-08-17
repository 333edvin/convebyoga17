import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function CTASection(){

    return(
        <div className="flex flex-col justify-center items-center gap-5 mx-auto text-center bg-lime-900 text-white p-14 py-20">
            <p className="text-2xl">To Improve Your Health And Mind <br /> Contact Us Now!</p>
            <Link href='/contact'>
            <button className="btn bg-trueGray-300 text-warmGray-500 rounded-none">JOIN NOW <FaCircleArrowRight/></button>
            </Link>
        </div>
    )
}