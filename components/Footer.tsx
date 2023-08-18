import React from 'react'
import { footerLinks } from "../constants";
import logo_purple from "../public/logo-purple.svg"
import Image from "next/image"
import Link from "next/link"
import { type } from 'os';

type footerProps = {
  title: string,
  links: Array<string>
}


const Footer_Column = ({ title, links }) => {
  return (
    <div className="footer_column">
      <h1 className='font-bold'>{title}</h1>
      <div className="flex flex-col ">
        {
          links.map((link) => {
            return (
              <Link href={"#"}>{link}</Link>
            )
          })
        }
      </div>
    </div>
  )
}
function Footer() {
  return (
    <footer className='footer flex bg-[ghostwhite]'>
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo-purple.svg" width={116} height={38} alt="logo" />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world&apos;s leading community for creatives to share, grow, and get hired.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-7 flex-wrap">
        <Footer_Column title={footerLinks[0].title} links={footerLinks[0].links} />
        <div className="flex flex-col flex-1 gap-4">
          <Footer_Column title={footerLinks[1].title} links={footerLinks[1].links} />
          <Footer_Column title={footerLinks[2].title} links={footerLinks[2].links} />
        </div>
        <Footer_Column title={footerLinks[3].title} links={footerLinks[3].links} />
        <div className="flex flex-col flex-1 gap-4">
          <Footer_Column title={footerLinks[4].title} links={footerLinks[4].links} />
          <Footer_Column title={footerLinks[5].title} links={footerLinks[5].links} />
        </div>
        <Footer_Column title={footerLinks[6].title} links={footerLinks[6].links} />
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ 2023 Flexibble. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,214</span> projects submitted
        </p>
      </div>
    </footer>
  )
}

export default Footer