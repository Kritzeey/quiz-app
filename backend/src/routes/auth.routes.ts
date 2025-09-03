import express from "express";
import { getUser, logIn, logOut, signUp } from "../controllers/auth.controller";

const router = express.Router();

router.post("/sign-up", signUp);

router.post("/log-in", logIn);

router.post("/log-out", logOut);

router.get("/", getUser);

export default router;
