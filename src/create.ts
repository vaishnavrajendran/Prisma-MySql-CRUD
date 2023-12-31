import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try {
        const data = [
            { name: "Vaishnav2", description: "Dev", link: "www.vaishnav.com" },
            { name: "Edward2", description: "Dev", link: "www.edward.com" }
        ]
        await prisma.youtube_channels.createMany({
            data,
            skipDuplicates: true
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