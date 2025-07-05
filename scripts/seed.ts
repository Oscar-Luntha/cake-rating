import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.wallOfFame.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      images: Array(22).fill(null), // 22 empty slots
    },
  })

  console.log('WallOfFame seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
