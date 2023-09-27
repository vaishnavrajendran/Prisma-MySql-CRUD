import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try {
        const response = await prisma.youtube_channels.findMany({
            where: {
                subscribers:{
                    gte:0
                },
                name:{
                    not:"Vaishnav R"
                }
            }
        })
        console.log("Res", response);
        
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