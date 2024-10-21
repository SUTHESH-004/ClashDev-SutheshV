import express, { Router } from "express";
import { addUser } from "../controllers/AuthController.js";
const AuthRouter = express(Router);

// AuthRouter)
AuthRouter.post("/add", addUser);
AuthRouter.post("/sign-in",signIn);


export default AuthRouter;
