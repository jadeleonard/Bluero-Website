import prisma from "@/lib/db";
import { dropdown } from "@prisma/client";

interface props{
    Props:dropdown;
}


function Bar({Props}:props){
    return(
        <div className="bg-gray-800 text-white w-64 flex-shrink-0">
            <p className="p-4">{Props.button}</p>
            <p className="p-4">{Props.dialog}</p>
            <p className="p-4">{Props.dropdown}</p>
            <p className="p-4">{Props.input}</p>
        </div>
    )
}


export default async function BarProps(){
    const response = await prisma.dropdown.findMany();
    return(
        <div>
            {response.map((data,index) =>(
                <Bar key={index} Props={data} />
            ))}
        </div>
    )
}