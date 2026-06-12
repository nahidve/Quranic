import { prisma } from "../../config/prisma";

/**
 * Save or update last read position
 */
export async function upsertProgress(userId: string, ayahId: string) {
  const existing = await prisma.progress.findFirst({
    where: { userId },
  });

  if (existing) {
    return prisma.progress.update({
      where: { id: existing.id },
      data: { ayahId },
    });
  }

  return prisma.progress.create({
    data: {
      userId,
      ayahId,
    },
  });
}

/**
 * Get last read position
 */
export async function getProgress(userId: string) {
  return prisma.progress.findFirst({
    where: { userId },
  });
}
