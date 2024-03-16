import Link from "next/link";
import React from "react";

const NavBar = () => {
    return(
        <nav> 
            <div className="flex items-center justify-around flex-grow p-8 mx-auto ">
                <Link href={"/"} className="text-5xl text-black ">LOGO</Link>
                <Link href={"/"} className="text-black ">About Me</Link>
                <Link href={"/"} className="text-black ">My Projects</Link>
                <Link href={"/"} className="text-black ">Contacts</Link>
            </div>
        </nav>
    )
}

export default NavBar;