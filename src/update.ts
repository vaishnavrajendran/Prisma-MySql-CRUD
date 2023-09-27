import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try {
        const response = await prisma.youtube_channels.updateMany({
            where:{
                name:{
                    in:["Vaishnav R", "Edward2"]
                }
            },
            data: {
                subscribers:500
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