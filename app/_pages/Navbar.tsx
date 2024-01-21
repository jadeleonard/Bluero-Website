import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/db";
import { navbar } from "@prisma/client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

interface Props {
  Props: navbar[];
}

function NavbarProps({ Props }: Props) {
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-200 shadow-md">
      <Link className="text-2xl font-bold mx-auto" href={'/'}>Logo</Link>
      <ul className="hidden sm:inline-flex gap-4 mx-auto">
        {Props.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link href={item.href}>{item.content}</Link>
            ) : (
              <span>{item.content}</span>
            )}
          </li>
        ))}
      </ul>
      <div className=" inline-flex">
    
  <Input className="w-1/1" type="search" />
    <Button variant={'ghost'}><FaSearch /></Button>
     

                
        </div>

    </div>
  );
}

export default async function Navbar() {
  const response = await prisma.navbar.findMany();
  return (
    <div>
      <NavbarProps Props={response} />
    </div>
  );
}
