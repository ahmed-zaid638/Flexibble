"use client"
import React, { useEffect, useState } from 'react'
import { getProviders, signIn } from "next-auth/react"
type Provider = {
  id: string,
  name: string,
  type: string,
  siginUrl: string,
  callbackUrl: string,
  signinUrlParams?: Record<string, string> | null

}

type Providers = Record<string, Provider>



function AuthProvider() {
  const [providers, setProviders] = useState(null)
  useEffect(() => { 
    const fetchProvders = () => { 
     console.log('proviers')
    }
    fetchProvders()
  })


  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider