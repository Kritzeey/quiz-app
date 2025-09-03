import express from "express";

const router = express.Router();

router.post("/sign-up");

router.post("/log-in");

router.post("/log-out");

router.get("/");

export default router;
