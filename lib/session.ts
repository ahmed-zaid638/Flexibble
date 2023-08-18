import { getServerSession } from "next-auth/next";
import { Account, AuthOptions, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import jsonwebtoken from "jsonwebtoken";
import { Session } from "inspector";
import { SessionInterface } from "@/commons.types";

//authOptions
export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLINET_ID || "",
      clientSecret: process.env.GOOGLE_CLINET_ID || "",
    }),
  ],
  //   jwt: {
  //       encode: ({secret , token}) {

  //       },
  //       decode: async({secret, token}) {

  //       }
  //   },
  theme: {
    colorScheme: "light",
    // logo: "./logo.png",
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        return true;
      } catch (error: any) {
        console.log(error);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
 const session = await getServerSession(authOptions) as SessionInterface
 return session
}



