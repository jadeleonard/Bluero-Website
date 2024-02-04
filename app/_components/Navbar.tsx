import Link from 'next/link'
import React from 'react'
import prisma from '@/lib/db'
import { navbar } from '@prisma/client'
type props ={
    Props:navbar[];
}


function NavbarProps({Props}:props){
    return(
        <div className='flex items-center justify-between p-4'>
            <div className='text-2xl mx-auto'>
                <Link href={'/'}  >Logo</Link>
            </div>
            <ul className='hidden sm:inline-flex gap-4 mx-auto'>
            {Props.map((items) =>(
                <li key={items.id}><Link href={items.href}>{items.section}</Link></li>
            ))}
            </ul>
        </div>
    )
}
const Navbar = async () => {
    const data = await prisma.navbar.findMany();




  return (
    <div>
        <NavbarProps Props={data} />
    </div>
  )
}

export default Navbar
