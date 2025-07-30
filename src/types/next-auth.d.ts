// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    address?: string;
    user: {
      address?: string;
    };
  }

  interface User {
    address: string;
    chainId?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    address?: string;
  }
}
