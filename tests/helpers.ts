import { prisma } from "../src/config/database";

export async function cleanDb () {
    await prisma.session.deleteMany({});
    await prisma.box.deleteMany({});
    await prisma.userCard.deleteMany({});
    await prisma.practiceCard.deleteMany({});
    await prisma.practice.deleteMany({});
    await prisma.user.deleteMany({});
}