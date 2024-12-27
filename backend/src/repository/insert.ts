import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insert = async (
  name: string,
  address: string,
  tokenId: number,
  registrationTx: string,
  blockNumber: number
) => {
  await prisma.user.create({
    data: {
      name: name,
      user_address: address,
      token_id: tokenId,
      registration_tx: registrationTx,
      block_number: blockNumber,
      timestamp: new Date(),
    },
  });
};

export default insert;
