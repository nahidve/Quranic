import { Request, Response } from "express";
import { getParam } from "../../utils/params";
import { upsertProgress, getProgress } from "./progress.service";

/**
 * Save last read ayah
 * (called when user scrolls or exits reader)
 */
export async function updateProgress(req: Request, res: Response) {
  const userId = (req as any).userId;
  const ayahId = req.body.ayahId;

  if (!ayahId) {
    return res.status(400).json({ message: "ayahId required" });
  }

  const data = await upsertProgress(userId, ayahId);
  res.json(data);
}

/**
 * Get resume position
 */
export async function fetchProgress(req: Request, res: Response) {
  const userId = (req as any).userId;

  const data = await getProgress(userId);
  res.json(data);
}
