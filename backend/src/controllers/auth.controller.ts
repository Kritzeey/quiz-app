import type { Request, Response } from "express";

export async function signUp(req: Request, res: Response): Promise<void> {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
}

export async function logIn(req: Request, res: Response): Promise<void> {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
}

export async function logOut(req: Request, res: Response): Promise<void> {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
}

export async function getUser(req: Request, res: Response): Promise<void> {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
}
