import { secureHeapUsed } from 'crypto'
import React from 'react'
import Link from "next/link"
import logo from "../public/logo.svg"
import Image from "next/image"
import { NavLinks } from "../constants"
import AuthProvider from './AuthProvider'
import { getCurrentUser } from '@/lib/session'
import { userAgent } from 'next/server'

async function Navbar() {
    const session = await getCurrentUser()
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
                {session?.user ? (
                    <>
                        {session?.user?.image && (
                            <Image
                                src={session.user.image}
                                height={40}
                                width={40} alt={''}                                >

                            </Image>

                        )}
                        <Link href={"#"}>
                            Share your work
                        </Link>
                    </>
                ) : (
                    <AuthProvider />
                )
                }
            </div>
        </section >
    )
}

export default Navbar