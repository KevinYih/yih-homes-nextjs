import GoogleProvider from "next-auth/providers/google";
import connectDB from "../../../../../config/database";
import User from '../../../../../models/User'

export const authOptions = {
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],  
  callbacks: {
    //Invoked on successful sign in
    async signIn({ profile }) {
      //1.Connect to the database
      //2.Check if user exists
      //3.if not, create user
      //4. return true to allow sign in
      return true;
    },
    // Session callback function that modifies the session object
    async session({ session }) {
      //1. get user from database
      //2. assign user id from the session
      //3. return session
      return session;
    },
  },  
};
