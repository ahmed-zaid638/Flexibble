"use client"

import React, { useEffect, useState } from 'react';
import { getProviders, signIn } from "next-auth/react";
import { ifError } from 'assert';

type Provider = {
  id: string,
  name: string,
  type: string,
  signInUrl: string,
  callbackUrl: string,
  signInUrlParams?: Record<string, string> | null
}

type Providers = Record<string, Provider>;

function AuthProvider() {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log(res);
      setProviders(res);
    };
    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {
          Object.values(providers).map((provider: Provider, i) => (
            <button key={i} onClick={() => signIn(provider.id)}>
              {provider.name}
            </button>
          ))
        }
      </div>
    );
  }

  return null;
}

export default AuthProvider;