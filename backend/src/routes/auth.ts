import { Router, Response, Request } from "express";
import passport from "passport";
export const authRouter = Router();

const CLIENT_URL = "http://localhost:5173";

authRouter.get("/", async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(400).json({message: "No Session Found, Login Again!"});
  }
  return res.status(200).json({message: "you are logged in"});
})

authRouter.get("/login/failed", (req: Request, res: Response) => {
  return res
    .status(401)
    .json({ success: false, message: "Failed to authenticate with google" });
});

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
