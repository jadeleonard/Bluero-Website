import prisma from "@/lib/db";
import { datas } from "@prisma/client";
import Link from "next/link";

interface Props{
    props : datas;
}
function HeroProps({props}:Props) {
    return(
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{props.herotitle}</p>
            <p className=" text-2xl mb-4 ">{props.herosubtitle}</p>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{props.herodescription}</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-4">
                <Link href={''} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get Started
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </Link>
                <Link href={''} className="bg-blue-400 rounded p-4 shadow-md text-base font-medium text-center">
                Tutorial
                </Link>
            </div>
        </div>
    )
}


export default async function Hero(){
    const response = await prisma.datas.findMany();
    return(
        <div>
            <HeroProps props={response[0]} />
        </div>
    )
}