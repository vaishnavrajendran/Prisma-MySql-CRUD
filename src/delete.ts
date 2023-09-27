import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.youtube_channels.delete({
            where: {
                id: 1
            }
        })
    } catch (error) {
        console.log("Error", error);
    } finally {
        (async () => {
            prisma.$disconnect().then(() => {
                console.log("DB disconnected");
            })
        })()
    }
}

main()