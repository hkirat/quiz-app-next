import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

import { getOrCreateUser, getUserById } from "./db";  

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      cb: (error: any, user?: any) => void
    ) => {
      cb(null, profile);
    }
  )
);

passport.serializeUser(async (user: any, done: (error: any, id?: any) => void) => {
  const email = user.emails.length > 0 ? user.emails[0].value : null;
  if (!email) {
    return done(new Error("Unable to get the Email"));
  }
  const dbUser = await getOrCreateUser(email);
  return done(null, dbUser.id);
});

passport.deserializeUser(async (userId: number, done: (error: any, user?: any) => void) => {
  const user = await getUserById(userId);
  return done(null, user);
});