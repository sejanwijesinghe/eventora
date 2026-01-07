'use client' ;


import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href='/' className="logo">
                    <Image src="/icons/logonew.png" alt="Logo" width={24} height={24} />

                    <p>Eventora</p>
                </Link>

                <ul>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Events</Link>
                    <Link href='/'>Create Evenht</Link>

                </ul>
            </nav>
        </header>
    )
}
export default Navbar
