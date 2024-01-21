import Navbar from "@/app/_pages/Navbar";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Sidebar from '../../_pages/Sidebar'

import { button } from "@prisma/client";

type props = {
    Props: button;



}
function ButtonProps({Props}:props){
    return(
        <div>
       
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2 className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{Props.title}</h2>
            
         
            <p className="">{Props.usage}</p>
            
            <p>{Props.instruction}</p>
            <p>{Props.details}</p>
            </div>
            </div>
    )
}
export default async function ButtonPage(){
    await new Promise(resolve => setTimeout(resolve,3000))
    const response = await prisma.button.findMany();
    return(
       <div>
            <Navbar />
            <Sidebar />
            {response.map((data,index) =>(
                <ButtonProps  key={index} Props={data} />
            ))}
          
      </div>
    )
}