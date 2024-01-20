import prisma from "@/lib/db";
import { cta } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface props{
    Props: cta;
}
function CtaProps({Props}:props) {
    return(
        <Link href={''} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image src={''} width={20} height={40} alt="logo" />
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Props.ctatitle}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Props.ctasubtitle}</p>

        </Link>
    )
};


export default async function Cta(){
    const response  = await prisma.cta.findMany();
    return(
        <div>
            {response.map((cta,index)=>  (
                <CtaProps key={index} Props={cta} />
            ))}
            
        </div>
    )
}