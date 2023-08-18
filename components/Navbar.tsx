import { secureHeapUsed } from 'crypto'
import React from 'react'
import Link from "next/link"
import logo from "../public/logo.svg"
import Image from "next/image"
import { NavLinks } from "../constants"
import AuthProvider from './AuthProvider'

function Navbar() {
    const session = 4 > 8
    return (
        <section className='navbar flexBetween'>
            <div className='flex-1 flexStart gap-10   '>
                <Link href={logo}>
                    <Image src={logo} width={115} height={43} alt='alt' />
                </Link>
            </div>
            <ul className='xl:flex  hidden  text-small gap-7'>
                {
                    NavLinks.map((link) => {
                        return (
                            <Link href={link.href} key={link.key}>
                                {link.text}
                            </Link>
                        )
                    })
                }
            </ul>
            <div className="">
                {session ? (
                    <>
                        <div> UserPhote</div>
                        <Link href={"#"}>
                            Share your work
                        </Link>
                    </>
                ) :
                    (
                        <AuthProvider />
                    )
                }
            </div>
        </section>
    )
}

export default Navbar