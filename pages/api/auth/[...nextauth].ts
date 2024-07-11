import NextAuth, { Account, NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import axios from "axios";

interface ExtendedJWT extends JWT {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  error?: string;
}

const refreshAccessToken = async (token: ExtendedJWT): Promise<ExtendedJWT> => {
  try {
    const url = "https://accounts.spotify.com/api/token";

    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", token.refreshToken);
    params.append("client_id", process.env.SPOTIFY_CLIENT_ID!);
    params.append("client_secret", process.env.SPOTIFY_CLIENT_SECRET!);

    const response = await axios.post(url, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const refreshedTokens = response.data;

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: "https://accounts.spotify.com/authorize",
      scope: "user-read-email user-read-private user-library-read user-top-read",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async jwt({ token, account }: { token: ExtendedJWT; account?: Account }) {
      if (account) {
        token.accessToken = account.access_token!;
        token.refreshToken = account.refresh_token!;
        token.accessTokenExpires = Date.now() + account.expires_in! * 1000;
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }: { session: any; token: ExtendedJWT }) {
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
};

export default NextAuth(options);
